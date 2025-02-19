const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel-controllers');

router.get('/hotels', hotelController.getHotels);
router.post('/hotel', hotelController.addHotels);
router.put('/hotelId', hotelController.updateHotel);
router.delete('/hotel/:hotelId', hotelController.addHotels);

module.exports = router;
