const express=require ('express')
const fetchy=require('./controller/fetchy-controller')
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/fetchy/basic',async(req,res)=>{
    let results=await fetchy.basicGET(req.body.url)
    res.json(results)
})
app.get('/fetchy/plusHeaders',async(req,res)=>{
    let results=await fetchy.getWithHeaders(req.body.url, req.headers)
    res.json(results)
})
app.post('/fetchy-post/basic',async(req,res)=>{
    let results=await fetchy.basicPOST(req.body.url,req.body.pBody, req.headers)
    res.json(results)
})
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});