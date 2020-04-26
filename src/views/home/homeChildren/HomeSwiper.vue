<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link" >
        <img :src="item.image" alt=""/>
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/comon/swiper'

    export default {
        name: "HomeSwiper",
      props:{
        banners:{
          type:Array,
          default:[]
        }
      },
      components:{
        Swiper,
        SwiperItem
      },

    }
</script>

<style scoped>

</style>
