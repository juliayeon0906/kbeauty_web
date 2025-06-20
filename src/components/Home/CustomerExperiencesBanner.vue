<script setup>
import Carousel from '@/components/Carousel.vue'

const reviews = [
  {
    id: '100',
    content:
      '“Last week, I gave my child a hair styling session as a birthday gift. Lucy calmly discussed with my child the hairstyle they wanted and recreated it perfectly. Lucy is truly the best, and I will definitely book and visit again. Thank you so much"',
  },
  {
    id: '101',
    content: '“Joy was my stylist and she did an amazing job 💗🥰”',
  },
  {
    id: '102',
    content:
      '“My hairstylist was Esther. She was super nice and patient, I really like the haircut she gave me. The staff at K-Beauty Salon were all very welcoming and passionate, definitely recommend :)”',
  },
  {
    id: '103',
    content:
      '“지난주 여기서 아들의 머리를 잘랐는데 너무 좋았어요. 스텝분들도 친철하고 따뜻하게 반겨주는 분위기 최고입니다. 무엇보다 아들이 헤어스타일을 너무 좋아합니다.”',
  },
  {
    id: '104',
    content:
      '“I was little scared to try completely new salon than the other very marketed ones. But I am leaving with great experience from hair dresser Esther. She is very kind and clever. Great price and value for money. I am going to visit again for sure.”',
  },
  {
    id: '105',
    content:
      '“Consistently have a great experience here. The korean aunties know what’s up and are efficient and skilled. Also did a great job with my husband and 3yo daughter’s hair. Will be back to get some of their different korean perms.”',
  },
  {
    id: '106',
    content:
      '“Had an amazing experience!! 😊 They went above and beyond with little comforts—offering snacks, a blanket, ear covers and even an eye visor to make the process as relaxing as possible. My red-to-blonde balayage was a challenge, but Lucy communicated everything clearly, and I felt heard. Loved the result, & highly recommend!”',
  },
  {
    id: '107',
    content:
      "“My go to place to get a haircut in Halifax. got a korean perm a month ago and was really happy with how it turned out. Lucy did an amazing job with all my haircuts and she's incredibly patient and makes sure that the cut turns out well. Will be coming back :)”",
  },
  {
    id: '108',
    content:
      '“Joy is super professional, kind and friendly! Definitely going back again ! Thank you !!!”',
  },
  {
    id: '109',
    content:
      '“It is friendly and has a good atmosphere. They responded with a smile to even difficult orders, and when I visit here, my day feels good. There is a reason why I recommend it.”',
  },
  { id: '110', content: '“Ellie is best！！！ she cut my hair very stylish.”' },
]
</script>

<template>
  <div class="banner-container">
    <div class="exterior-banner">
      <div class="interior-banner">
        <div
          class="content-container flex flex-col justify-center items-center w-full"
        >
          <div class="header-container pt-[55px] mb-[20px]">
            <h2 class="header-text">Experience At K-Beauty</h2>
          </div>
          <div class="w-full">
            <Carousel :items="reviews" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-container {
  min-height: 500px;
  display: flex;
  width: 100%;
  margin-bottom: 40px;
}
.exterior-banner {
  width: 100%;
  background-color: #3f3f3f;
  display: flex;
  justify-content: center;
  align-items: center;
}
.interior-banner {
  background-color: #2b2b2b;
  max-width: 810px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-container {
  width: 470px;
  display: flex;
}
.header-text {
  width: 270px;
  font-size: 32px;
  color: #ffbf00;
}
@media only screen and (max-width: 700px) {
  .interior-banner {
    width: 100%;
  }
  .header-container {
    width: 100%;
    padding: 0 40px;
  }
}
</style>
