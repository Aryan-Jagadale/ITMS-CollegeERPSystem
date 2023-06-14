const express = require('express');
const router = express.Router();

const studentlistsControllers = require('../../Controllers/CTControllers/TYAssignSubjectsControllers');

router.post('/assign-subject-list',studentlistsControllers.postStudentlist);
router.get('/get-assign-subjects/:email',studentlistsControllers.getStudentlists);

module.exports = router;