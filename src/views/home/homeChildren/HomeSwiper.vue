<template>
  <Swiper>
    <SwiperItem v-for="(item,index) in banners"  >
      <a :href="item.link" :key="index">
        <img :src="item.image" alt="" @load="imageLoad"/>
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/comon/swiper'

    export default {
        name: "HomeSwiper",
      data(){
          return {
            isLoad:false
          }
      },
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
      methods:{
        imageLoad(){
            if(!this.isLoad){
              this.$emit('imageLoad');
              this.isLoad=true;
            }
        }
      }
    }
</script>

<style scoped>

</style>
