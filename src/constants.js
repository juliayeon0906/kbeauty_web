import JoyImage from '@/assets/images/Designers/A.jpg'
import EstherImage from '@/assets/images/Designers/B.jpg'
import LucyImage from '@/assets/images/Designers/C.jpg'
import EllieImage from '@/assets/images/Designers/D.jpg'
import CallIcon from '@/assets/icons/call_Icon.png'
import GmailIcon from '@/assets/icons/gmail.png'
import MapIcon from '@/assets/icons/ping_mark.png'
import InstaIcon from '@/assets/icons/insta_logo.png'
import ColourMenu from '@/assets/images/menu/COLOUR_TEXT.png'
import CutMenu from '@/assets/images/menu/CUT_TEXT.png'
import PermMenu from '@/assets/images/menu/PERM_TEXT.png'

export const STYLISTS_INFO = [
  {
    STYLISTS: [
      {
        name: 'Joy',
        position: 'Master Stylist',
        description:
          'Joy ran a hair salon in Sindorim, Korea, for 18 years, gaining extensive experience in the beauty industry while building a loyal client base. She also served as a supervising professor for graduating students in the Department of Beauty at Hyejeon College, where she guided them in mastering a wide range of beauty techniques and preparing for their professional careers. With expertise in all aspects of beauty, She take pride in delivering exceptional results tailored to each client’s unique needs.',
        image: JoyImage,
      },
      {
        name: 'Esther',
        position: 'Master Stylist',
        description:
          "Esther has extensive hands-on experience as a nail technician and hairstylist in Korea's dynamic beauty industry. Since settling in Halifax in 2024, she has brought cutting-edge expertise in trendy Korean beauty techniques, including haircuts tailored to various textures and lengths, hair coloring, highlights, Korean perms, and treatments." +
          '\n' +
          'Above all, Esther believes clear communication with clients is the most crucial part of her work. She is dedicated to providing sophisticated services and delivering exceptional beauty results, ensuring every client leaves feeling confident and satisfied.',
        image: EstherImage,
      },
      {
        name: 'Lucy',
        position: 'Master Stylist',
        description:
          'With over 20 years of experience in the beauty industry, Lucy brings extensive expertise to her work. She has styled K-pop stars in Korea, collaborated on fashion magazine shoots, and managed her own salon in Seoul as CEO. After graduating from the Shiseido Beauty Academy in Japan, she further expanded her skills through experiences in Japan, Australia, and Vancouver. Lucy is proficient in all areas of styling, including cuts, perms, coloring, treatments, and updos. She is excited to offer her top-quality services at K-Beauty.',
        image: LucyImage,
      },
      {
        name: 'Ellie',
        position: 'Master Stylist',
        description:
          'Ellie is a highly passionate master stylist. Early in her career, she worked at five different hair salons over the course of seven years to gain as much experience as possible. With all the skills she acquired, Ellie has successfully run her own business for the past 19 years. She specializes in providing personalized hair styling to ensure customer satisfaction.',
        image: EllieImage,
      },
    ],
  },
]

export const CONTACT_OPTIONS = [
  {
    name: 'Phone Number',
    text: 'TEL: (902) 405-0399',
    icon: CallIcon,
  },
  {
    name: 'Address',
    text: '6299 Quinpool Road\nHalifax, NS B3L 1A4',
    icon: MapIcon,
  },
  {
    name: 'Email',
    text: 'kbeautysalonhfx@gmail.com',
    icon: GmailIcon,
  },
  {
    name: 'Instagram',
    text: 'k_beauty_salon_halifax',
    icon: InstaIcon,
  },
]

export const MENU_OPTIONS = [
  {
    image: CutMenu,
  },
  {
    image: PermMenu,
  },
  {
    image: ColourMenu,
  },
]
