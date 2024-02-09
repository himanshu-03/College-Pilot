const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student-controller');

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

router.post('/signup', studentController.signup);
router.post('/login', studentController.login);

module.exports = router;
