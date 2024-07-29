import express from "express"
import authMiddware from "../middleware/auth.js"
import { placeOrder, verifyOrder ,userOrders, listOrders, upadteStatus} from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place",authMiddware,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddware,userOrders);
orderRouter.get("/list",listOrders);
orderRouter.post("/status",upadteStatus);

export default orderRouter;