const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.get("/", orderController.getAllOrders);

router.get("/:id", orderController.getOrderById);

router.put("/:id/status", orderController.updateOrderStatus);

module.exports = router;
