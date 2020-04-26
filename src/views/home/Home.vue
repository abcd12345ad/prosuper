<template>

  <div id="home" >

    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <ScrollBetter class="content"
                  ref="scrollBetter"
                  :probeType="3" :pullUpLoad="true"
                  @scrollChange="scrollChange" @scrollLoad="scrollLoad">
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"/>
    <FatureView/>
    <TabControl class="home-tab-control" :title="['流行','经典','精选']" @tabClick="tabClick"/>
    <GoodList :goods="getInfo"/>
    </ScrollBetter>
    <BackTop @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import NavBar from 'components/comon/navbar/NavBar'
  import ScrollBetter from 'components/comon/scroll/ScrollBetter'
  import BackTop from 'components/content/backTop/BackTop'
  import HomeSwiper from 'views/home/homeChildren/HomeSwiper'
  import FatureView from 'views/home/homeChildren/FatureView'
  import {getHomeMultidata,getHomeGoods} from 'network/home/HomeAjax'
  import RecommendView from 'views/home/homeChildren/RecommendView'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodList'
    export default {
        name: "Home",
      data(){
          return {
            banners:[],
            recommends:[],
            isShow:false,
            goods:{
              'pop':{
                      page:0,
                     list:[
                           {title:'single001',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/CD528D2A.jpg'}},
                           {title:'single002',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/795DED0E.jpg'}},
                           {title:'single003',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/6CFCC691.jpg'}},
                           {title:'single004',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/63C00B01.jpg'}},
                           {title:'single005',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/3BA78986.jpg'}},
                            {title:'single006',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/09B62DFA.jpg'}}
                            ]
              },
              'news':{
                page:0,
                list:[
                  {title:'single007',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/F608FC2E.jpg'}},
                  {title:'single008',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/E716866B.jpg'}},
                  {title:'single009',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/9D840F43.jpg'}},
                  {title:'single010',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/4E7E4143.jpg'}},
                  {title:'single012',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/45F2958B.jpg'}},
                  {title:'single013',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/4355871E.jpg'}}
                ]
              },
              'sell':{page:0,list:[
                  {title:'single014',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/0E299C30.jpg'}},
                  {title:'single015',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/140D2758.jpg'}},
                  {title:'single016',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/677DCE6C.jpg'}},
                  {title:'single017',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/CA832F37.jpg'}},
                  {title:'single018',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/DF738CD1.jpg'}},
                  {title:'single019',show:{img:'https://cdn.jsdelivr.net/gh/hhgal/mycdn/pic2/F9FA28E3.jpg'}}
                ]}
            },
            goodType:'pop'
          }
      },
      components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FatureView,
        TabControl,
        GoodList,
        ScrollBetter,
        BackTop
      },
      computed:{
          getInfo(){
            return this.goods[this.goodType].list;
          }
      },
      methods:{
        getHomeMultidata(){
          getHomeMultidata().then(
            res=>{
              console.log(res)
              this.banners=res.data.banner.list
              this.recommends=res.data.recommend.list
            }
          )
        },
        getHomeGoods(type){
          const page=this.goods[type].page+1;
          getHomeGoods(type,page).then(
            res=>{
              console.log(res);
           //   this.goods[type].list.push(...res.data.list);

             // this.goods[type].page+=1;
            }
          )
        },
        tabClick(index){
          console.log(index);
          switch (index) {
            case 0:this.goodType='pop'; break;
            case 1:this.goodType='news'; break;
            case 2:this.goodType='sell'; break;

          }
          console.log(this.goodType)
        },
        backClick(){

          this.$refs.scrollBetter.toTop(0,0)
        },
        scrollChange(position){

            this.isShow=(-position.y)>500
        },
        scrollLoad(){
          console.log('拉扯到你最爱');
          //this.getHomeGoods(this.goodType);
          this.goods[this.goodType].page+=1;
          let array=this.goods[this.goodType].list;
          this.goods[this.goodType].list=array.concat(array);
          this.$refs.scrollBetter.scrollFinish();
          this.$refs.scrollBetter.scroll.refresh();
        }
      },
      created() {
       this.getHomeMultidata();
       this.getHomeGoods('pop');
      }
    }
</script>

<style scoped>
  #home{

    height:100vh;
  }
.home-nav{
  background-color: var(--color-tint);
  color:white;

  position: fixed;
  left:0;
  right:0;
  top:0;
  z-index: 0;
}
  .home-tab-control{
    position: sticky;
    top:44px;
  }
  .content{
    height:calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  }
</style>
