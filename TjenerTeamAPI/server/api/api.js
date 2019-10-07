const router = require('express').Router();

router.use('/bookings', require('./booking/bookingRoutes'));
router.use('/corporation_users', require('./corporation/corporation_Routes'));
router.use('/employee_users', require('./employee_user/employee_Routes'));


module.exports = router;
