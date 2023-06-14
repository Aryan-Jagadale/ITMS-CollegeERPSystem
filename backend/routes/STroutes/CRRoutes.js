const express = require('express');
const router = express.Router();

const studymaterialsControllers = require('../../Controllers/STControllers/CRControllers');

router.post('/add-studymaterial',studymaterialsControllers.postStudymaterial);
router.get('/get-studymaterials/:email',studymaterialsControllers.getStudymaterials);
router.get('/get-studymaterials',studymaterialsControllers.getAllStudymaterials);
router.get('/get-studymaterial/:id',studymaterialsControllers.getStudymaterialById);
router.delete('/delete-studymaterial/:id',studymaterialsControllers.deleteStudymaterials);
router.patch('/update-studymaterial/:id',studymaterialsControllers.updateStudymaterial);

module.exports = router;