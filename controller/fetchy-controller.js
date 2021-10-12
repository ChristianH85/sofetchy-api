const axios=require('axios')
module.exports ={
    basicGET:(url)=>{
        axios.get(url).then(res=>{
            return res
        })
    },
    getWithHeaders:(url, headers)=>{
        axios.get(url,headers).then(res=>{
            return res
        })
    },
    basicPost:(url,body)=>{
        axios.post(url,body).then(res=>{
            return res
        })
    },
    postWithHeaders:(url,body,headers)=>{
        axios.post(url,body,headers).then(res=>{
            return res
        })
    },
}