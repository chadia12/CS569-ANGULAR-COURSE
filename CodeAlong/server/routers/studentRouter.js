
const express =  require('express');
const studentControler = require('../controlers/studentControler');
const router = express.Router();
router.get('/',studentControler.getAllStudent);
router.get('/:std_id',studentControler.getStudentById);
router.post('/',studentControler.addStudent);
router.patch('/:std_id',studentControler.updateStudent);
router.get('/:std_id',studentControler.deleteStudent);

module.exports = router;
