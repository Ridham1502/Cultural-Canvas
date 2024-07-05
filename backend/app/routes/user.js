require('../config/passport')
const express = require('express');
const router = express.Router()
const controller = require('../controllers/user');
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const trimRequest = require('trim-request')
const authorize = require('../middlewares/authorize');








router.get(
    '/test',
    controller.test
)
// -----------------------------------------
router.post(
    '/signup',
    controller.signup
)


router.post(
    '/login',
    trimRequest.all,
    controller.login
)



// ------------------------------------------------

router.post(
    '/uploadFileToServer',
    controller.uploadFileToServer
)


router.get(
    '/profile',
    requireAuth,
    // authorize('user'),
    controller.getProfile
)

module.exports = router