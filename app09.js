// <!-- 9. Express REST CRUD for Products (In-Memory) -->

const express=require('express'),app=express();
app.use(express.json());
let products=[
 {id:1,name:'Keyboard',price:900,description:'USB keyboard'}
];
app.get('/products',(req,res)=>res.json(products));
app.get('/products/:id',(req,res)=>{
 const p=products.find(x=>x.id===+req.params.id);
 p?res.json(p):res.status(404).json({message:'Not found'});
});
app.post('/products',(req,res)=>{
 const p={id:Date.now(),...req.body};products.push(p);
 res.status(201).json(p);
});
app.put('/products/:id',(req,res)=>{
 const i=products.findIndex(x=>x.id===+req.params.id);
 if(i<0)return res.status(404).json({message:'Not found'});
 products[i]={...products[i],...req.body,id:products[i].id};res.json(products[i]);
});
app.delete('/products/:id',(req,res)=>{
 const old=products.length;products=products.filter(x=>x.id!==+req.params.id);
 res.json({deleted:products.length<old});
});
app.listen(3000,()=>console.log('Server on 3000'));

// Run: `npm init -y` → `npm install express` → `node app.js`. Test GET/POST/PUT/DELETE at http://localhost:3000/products. Data resets when the server restarts.
