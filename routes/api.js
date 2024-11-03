import express from "express";
const router = express.Router();
import * as FeatureController from "../app/controllers/FeaturesController.js";
import authMiddleware from "../app/middlewares/authMiddleware.js";
import {CreateCookies, RemoveCookies} from "../app/controllers/FeaturesController.js";


router.get("/feature1/TokenEncoder", FeatureController.TokenEncode)
router.get("/feature2/TokenEncoder", FeatureController.TokenDecode)
// router.get("/feature3/Email", FeatureController.Email)
router.get("/feature4/Profile", authMiddleware, FeatureController.Profile)
router.get("/feature5/CreateCookies", FeatureController.CreateCookies)
router.get("/feature6/RemoveCookies", FeatureController.RemoveCookies)
// router.get("/feature7/FileUpload", FeatureController.FileUpload)



export default router;