const express = require('express');
const router = express.Router();

const studentlistsControllers = require('../../Controllers/CTControllers/StudentlistsControllers');

router.post('/add-studentlist',studentlistsControllers.postStudentlist);
router.get('/get-studentlists/:email',studentlistsControllers.getStudentlists);
router.get('/get-studentlist/:id',studentlistsControllers.getStudentlistById);
router.delete('/delete-studentlist/:id',studentlistsControllers.deleteStudentlists);
router.patch('/update-studentlist/:id',studentlistsControllers.updateStudentlist);

module.exports = router;