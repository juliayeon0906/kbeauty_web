import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const IMAGES_DIR = path.join(__dirname, '../src/assets/images')

// Configuration for different image types
const configs = {
  // Background/banner images - max 1920px width
  backgrounds: {
    files: [
      'HERO_BANNER.jpg',
      'OUR_STYLISTS.jpg',
      'Our_Services_Background_Image.jpg',
      'Services_Banner_Background.jpg',
      'Landing_page_background_image.jpg',
      'Business_Hour.jpg',
      'service.jpg',
    ],
    maxWidth: 1920,
    quality: 80,
  },
  // Gallery images - max 800px width (displayed at 400px)
  gallery: {
    dir: 'GALLERY',
    maxWidth: 800,
    quality: 80,
  },
  // Designer/Stylist images - max 600px width
  designers: {
    dirs: ['Designers', 'STYLISTS'],
    maxWidth: 600,
    quality: 80,
  },
  // Other directories
  others: {
    dirs: ['about', 'menu', 'services', 'business_hour'],
    maxWidth: 800,
    quality: 80,
  },
}

async function optimizeImage(inputPath, outputPath, maxWidth, quality) {
  try {
    const image = sharp(inputPath)
    const metadata = await image.metadata()

    let pipeline = image

    // Only resize if image is larger than maxWidth
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize(maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside',
      })
    }

    await pipeline.webp({ quality }).toFile(outputPath)

    const inputStats = fs.statSync(inputPath)
    const outputStats = fs.statSync(outputPath)
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1)

    console.log(
      `✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`
    )
    console.log(
      `  ${(inputStats.size / 1024 / 1024).toFixed(2)}MB → ${(outputStats.size / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`
    )
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message)
  }
}

async function processDirectory(dirPath, maxWidth, quality) {
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`)
    return
  }

  const files = fs.readdirSync(dirPath)
  for (const file of files) {
    const ext = path.extname(file).toLowerCase()
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(dirPath, file)
      const outputPath = path.join(dirPath, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'))
      await optimizeImage(inputPath, outputPath, maxWidth, quality)
    }
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n')

  // Process background images
  console.log('📸 Processing background images...')
  for (const file of configs.backgrounds.files) {
    const inputPath = path.join(IMAGES_DIR, file)
    if (fs.existsSync(inputPath)) {
      const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
      await optimizeImage(
        inputPath,
        outputPath,
        configs.backgrounds.maxWidth,
        configs.backgrounds.quality
      )
    }
  }

  // Process gallery
  console.log('\n📸 Processing gallery images...')
  await processDirectory(
    path.join(IMAGES_DIR, configs.gallery.dir),
    configs.gallery.maxWidth,
    configs.gallery.quality
  )

  // Process designer images
  console.log('\n📸 Processing designer/stylist images...')
  for (const dir of configs.designers.dirs) {
    await processDirectory(
      path.join(IMAGES_DIR, dir),
      configs.designers.maxWidth,
      configs.designers.quality
    )
  }

  // Process other directories
  console.log('\n📸 Processing other images...')
  for (const dir of configs.others.dirs) {
    await processDirectory(
      path.join(IMAGES_DIR, dir),
      configs.others.maxWidth,
      configs.others.quality
    )
  }

  console.log('\n✅ Image optimization complete!')
  console.log('💡 Update your code to use .webp files instead of .jpg')
}

main()
