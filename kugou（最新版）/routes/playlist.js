const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.get("/",(req,res)=>{
	var sql=`select * from hot_play`;
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
module.exports=router;