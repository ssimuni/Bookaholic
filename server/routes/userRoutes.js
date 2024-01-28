import { Router } from "express";
import multer from 'multer';
import { createUser, findUser, getUser } from "../Controller/UserController.js";
import { createSellPost, getBuyPosts, getAllBuySellPost, getTransactionBuySell } from "../Controller/BuySellController.js";
import { createBorrowPost, getBorrowPosts } from "../Controller/BorrowController.js";
import { createExchangePost, getExchangePosts } from "../Controller/ExchangeController.js";
const router = new Router();

// Set up storage for uploaded files
var imgconfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance

var upload = multer({ storage: imgconfig });

router.post("/register", createUser);
router.post("/login", findUser);
router.post("/addsell", upload.single("image"), createSellPost);
router.post("/addborrow", createBorrowPost);
router.post("/addexchange", createExchangePost);

router.get("/profile/:userId", getUser)
router.get("/buyposts", getBuyPosts);
router.get("/borrowposts", getBorrowPosts);
router.get("/exchangeposts", getExchangePosts);
router.get("/all-buy-sell-post", getAllBuySellPost);
router.get("/transaction-buy-sell", getTransactionBuySell);
// export default { uploads};
export default router;