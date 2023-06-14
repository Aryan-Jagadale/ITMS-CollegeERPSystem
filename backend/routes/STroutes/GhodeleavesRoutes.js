const express = require('express');
const router = express.Router();

const ghodeleavesControllers = require('../../Controllers/STControllers/GhodeleavesControllers');

router.post('/add-ghodeleave',ghodeleavesControllers.postGhodeleave);
router.get('/get-ghodeleaves/:email',ghodeleavesControllers.getGhodeleaves);
router.get('/get-ghodeleaves',ghodeleavesControllers.getAllGhodeleaves);
router.get('/get-ghodeleave/:id',ghodeleavesControllers.getGhodeleaveById);
router.delete('/delete-ghodeleave/:id',ghodeleavesControllers.deleteGhodeleaves);
router.patch('/update-ghodeleave/:id',ghodeleavesControllers.updateGhodeleave);

module.exports = router;