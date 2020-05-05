import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carList:[]
  },
  mutations: {
      addCounter(state,payload){
        payload.count++;
      },
    addToCat(state,payload){
      payload.isChecked=true;
      state.carList.push(payload);
    },
    isChecked(state,payload){
      let good=state.carList.find((item)=>{

        return item.id===payload;
      })

      if(good){

        good.isChecked=!good.isChecked;
      }
    },
    selectAll(state,payload){

      state.carList.forEach(item=>{item.isChecked=payload})
    }
  },
  actions: {
    addCar(context,payload){
      return new Promise((resolve,reject)=>{
        let oldProduct=context.state.carList.find((item)=>{
          return item.id===payload.id;
        })

        if(oldProduct){

          // oldProduct.count+=1;
          context.commit('addCounter',oldProduct);
          resolve('this  product add one')
        }else{

          payload.count=1;
          //context.state.carList.push(payload);
          context.commit('addToCat',payload);
          resolve('add new product')
        }
      });

    }
  },
  modules: {
  }
})
