<template>
    <div class="goods">
      <GoodListItem v-for="item,index in goods" :good="item" :goodKey="index" :key="index"/>
    </div>
</template>

<script>
  import GoodListItem from 'components/content/goods/GoodListItem'
    export default {
        name: "GoodList",
        props:{
          goods:{
            type:Array,
            default:[]
          }
        },
      components:{
        GoodListItem
      }
    }
</script>

<style scoped>
.goods{
  display:flex;
  flex-wrap: wrap;
}
</style>
