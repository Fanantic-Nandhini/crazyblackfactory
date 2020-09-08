const express = require("express");
const router = express.Router();

const {getUserById, getUser, getUserInfo, updateUserInfo, userPurchaseList} = require("../controllers/user");

const {isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

router.get ("/user", getUserInfo);

router.put("/user/:userId", isSignedIn, isAuthenticated ,updateUserInfo)

router.get("/orders/user/:userId", isSignedIn, isAuthenticated ,userPurchaseList)

module.exports = router;