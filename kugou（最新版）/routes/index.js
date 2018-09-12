const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.get("/carousel",(req,res)=>{
	var sql=`select * from carousel`;
	pool.query(sql,[],(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
router.get("/jxgd",(req,res)=>{
	var sql=`select * from playlist`;
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
});
router.get("/rmbd",(req,res)=>{
	var sql=`select * from hot_list`;
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
router.get("/gdlist",(req,res)=>{
	var sql=`select * from hot_play`;
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})
router.get("/xgsf",(req,res)=>{
	var $title=req.query.id;
	var sql=`select *from new_start where title=?`;
	pool.query(sql,[$title],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
});
module.exports=router;