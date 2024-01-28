import { Router } from "express";
import { createUser, findUser, getUser } from "../Controller/UserController.js";
import { createSellPost, getBuyPosts, getAllBuySellPost, getTransactionBuySell } from "../Controller/BuySellController.js";
import { createBorrowPost, getBorrowPosts, getBorrowPost } from "../Controller/BorrowController.js";
import { createExchangePost, getExchangePosts, getExchangePost } from "../Controller/ExchangeController.js";
const router = new Router();

router.post("/register", createUser);
router.post("/login", findUser);
router.post("/addsell", createSellPost);
router.post("/addborrow", createBorrowPost);
router.post("/addexchange", createExchangePost);

router.get("/profile/:userId", getUser)
router.get("/buyposts", getBuyPosts);
router.get("/borrowposts", getBorrowPosts);
router.get("/exchangeposts", getExchangePosts);
router.get("/all-buy-sell-post", getAllBuySellPost);
router.get("/all-borrow-post", getBorrowPost);
router.get("/all-exchange-post", getExchangePost);
router.get("/transaction-buy-sell", getTransactionBuySell);
// export default { uploads};
export default router;