const express = require("express");

const { validation, wrapper, auth } = require("../../middlewares");
const { users } = require("../../controllers");
const { schemaSignup, schemaLogin, schemaUpdateSubscription } = require("../../models/user");
const upload = require('../../middlewares/dataUpload');

const router = express.Router();

router.post("/signup", validation(schemaSignup), wrapper(users.signup));

router.post("/login", validation(schemaLogin), wrapper(users.login));

router.get("/current", auth, wrapper(users.getCurrent));

router.get("/logout", auth, wrapper(users.logout));

router.patch("/", auth, validation(schemaUpdateSubscription), wrapper(users.updateSubscription));

router.patch("/avatars", auth, upload.single("avatar"), wrapper(users.updateAvatar)
);

module.exports = router;
