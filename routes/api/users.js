const express = require("express");

const { validation, wrapper, auth } = require("../../middlewares");
const { users } = require("../../controllers");
const { schemaSignup, schemaLogin, schemaUpdateSubscription } = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(schemaSignup), wrapper(users.signup));

router.post("/login", validation(schemaLogin), wrapper(users.login));

router.get("/current", auth, wrapper(users.getCurrent));

router.get("/logout", auth, wrapper(users.logout));

router.patch("/", auth, validation(schemaUpdateSubscription), wrapper(users.updateSubscription));

module.exports = router;
