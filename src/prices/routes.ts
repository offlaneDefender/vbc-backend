import express from "express";
import controller from "./controller";

const router = express.Router();

router.get("/", controller.getPrices);

router.get("/:id", controller.getPrice);

router.post("/", controller.createPrice);

router.put("/:id", controller.updatePrice);

router.delete("/:id", controller.deletePrice);

export default router;
