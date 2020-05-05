<template>
  <div class="cart">
      <NavBar class="nav-bar">
        <div slot="center">购物车({{carListLength}})</div>
      </NavBar>
    <CartList/>
    <CarBottomBar/>
  </div>
</template>

<script>
  import NavBar from 'components/comon/navbar/NavBar'
  import CartList from 'views/cart/childComp/CartList'
  import CarBottomBar from 'views/cart/childComp/CarBottomBar'


    export default {
        name: "Cart",
      components:{
        NavBar,CartList,CarBottomBar
      },
      computed:{
        carListLength(){
          return this.$store.state.carList.length;
        }
      }
    }
</script>

<style scoped>
  .cart{
    height:100vh;
  }
.nav-bar{
  background-color: var(--color-tint);
  color:white;
  font-weight: 700;
}
</style>
