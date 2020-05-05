<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot>

        </slot>
      </div>
    </div>
</template>

<script>
  import BScroll  from 'better-scroll'
    export default {
        name: "ScrollBetter",
      props:{
        probeType:{
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default:false
        }
      },
      data(){
        return {
          scroll:null
        }
      },
      methods:{
        toTop(x,y,time=1000){

          this.scroll&&this.scroll.scrollTo&&this.scroll.scrollTo(x,y,time);
        },
        scrollFinish(){
          this.scroll&&this.scroll.finishPullUp&&this.scroll.finishPullUp();
        },
        scrollRefresh(){

          this.scroll&&this.scroll.refresh&&this.scroll.refresh();
        },
        getScrollY(){
          return this.scroll?this.scroll.y:0
        }
      },
      mounted(){
        this.scroll=  new BScroll (this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad
        });
        this.scroll.on('scroll',(position)=>{
          this.$emit('scrollChange',position)

        })
        this.scroll.on('pullingUp',()=>{
         // console.log(position);
          this.$emit('scrollLoad')

        })

      }
    }
</script>

<style scoped>

</style>
