<template>

  <div class="goodListItem" @click="itemClick">
   <!-- <img :src="showImage" @load="imgLoad"/>-->
    <img v-lazy="showImage" @load="imgLoad"/>
    <div class="goods-info">
      <p class="collect">{{good.title}}</p>
    </div>
  </div>
</template>

<script>11

    export default {
        name: "GoodListItem",
      props:{
          good:{
            type:Object,
            default:{}
          },
        goodKey:{
            type:Number,
          default:0
        }
      },
      computed:{
          showImage(){
            return this.good.show.image||this.good.show.img
          }
      },
      methods:{
        imgLoad(){

          this.$bus.$emit('picLoad');
        },
        itemClick(){
          this.$router.push('/detail/'+'CD528D2A--'+this.goodKey);
        }
      }
    }
</script>

<style scoped>
.goodListItem img{
  width:100%;
  height:100%;
}
.goodListItem {
  padding-bottom: 40px;
  position: relative;
  width:48%;
  justify-content: space-around;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
