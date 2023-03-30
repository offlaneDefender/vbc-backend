import express from "express";
import controller from "./controller";

const router = express.Router();

router.get("/", controller.getPackSizes);

router.get("/:id", controller.getPackSize);

router.post("/", controller.createPackSize);

router.put("/:id", controller.updatePackSize);

router.delete("/:id", controller.deletePackSize);

export default router;