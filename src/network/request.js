import  axios from 'axios'
export function request(config){
  const instance=axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  });
 /* instance(config).then(
    res=>{
         console.log(res)
    }
  ).catch(
    err=>{
      console.log(err)
    }
  );*/
  instance.interceptors.request.use(config=>{
    console.log(config)
    return config;
  },error=>{
    console.log(error)
  })
  instance.interceptors.response.use(
    request=>{console.log(request)
  return request.data;
  },err=>{console.log(error)})
 return instance(config);
}
