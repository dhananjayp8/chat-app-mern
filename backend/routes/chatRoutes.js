const express=require("express");
const {protect}=require("../middleware/authMiddleware");
const {accessChat}=require("../controllers/chatControllers")
const router=express.Router();

router.route('/').post(protect,accessChat);
// router.route("/").post(protect,fetchChats);
// router.route("/rename").put(protect,renameGroup);
// router.route("/groupremove").put(protect,removeFromGroup);
// router.route("/groupadd").put(protect,addToGroup);


module.exports=router;