<template>
  <div id="recommend" class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :herf="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
          recommends:{
            type:Array,
            default:[]
          }
        }
    }
</script>

<style scoped>
.recommend{
  display: flex;
  /*text-align: center;*/
  font-size: 12px;
  width:100%;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
  .recommend-item{
    flex:1;
  }
.recommend-item img{
  width:70px;
  hight:70px;
  margin-bottom: 10px;
}
</style>
