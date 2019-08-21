const express= require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Enter a String');
});
app.get('/manali/:id',(req,res)=>{
//    res.send(req.params.id);
   var str1='manali';
   var str2=req.params.id;
   var words1 = str1.split("");
   var words2 = str2.split("");
   var  i;
   var  j;
   var flag= true;

   for (i = 0; i < words1.length; i++) {
       for (j = 0; j < words2.length; j++) {
           if (words1[i].toLowerCase() == words2[j].toLowerCase()) {
            res.status(200).send({ msg: `Success!Letter available in the name 'Manali' in ${req.params.id}` });
              flag=false;
           }   
       }
    }
       if(flag==true){
        res.status(400).send({ msg: `Fail ! Letter are not available in the name 'Manali' in ${req.params.id}`});
        
        
    }
   }
);
const port=process.env.PORT || 2000;
app.listen(port,()=>console.log ('listening '));