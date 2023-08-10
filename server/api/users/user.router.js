const { registerAdmin, adminLogin, getAdminDetails } = require('./user.controller');
const { handleAdminRefreshToken, handleLogout } = require('../tokens/token.controller');
const { addStaff, displayStaff, getStaffDetail, searchStaff, modifyStaff, removeStaff } = require('../staff/staff.controller');
const { addStudent, getStudentDetail, displayStudents, searchStudent, removeStudent, modifyStudent } = require('../students/student.controller');
const { addProgram, getProgramDetail, displayPrograms, searchProgram, removeProgram, modifyProgram } = require('../programme/programme.controller');
const { addSubject, getSubjectDetail, displaySubjects, searchSubject, removeSubject, modifySubject } = require('../subject/subject.controller');
const { addClass, getClassDetail, displayClasses, searchClass, removeClass, modifyClass } = require('../class/class.controller');
const { checkToken } = require('../../middleware/validate_token');

const router = require('express').Router();

router.post('/admin/register', registerAdmin);
router.post('/admin/login', adminLogin);
router.post('/admin/staff/register', checkToken, addStaff);
router.post('/admin/student/register', checkToken, addStudent);
router.post('/admin/program/create', checkToken, addProgram);
router.post('/admin/subject/create', checkToken, addSubject);
router.post('/admin/class/create', checkToken, addClass);

router.get('/admin/refresh', handleAdminRefreshToken);

//Student get routes
router.get('/admin/student/get/all', checkToken, displayStudents);
router.get('/admin/student/get/one/:index_number', checkToken, getStudentDetail);
router.get('/admin/student', checkToken, searchStudent);

//Staff get routes
router.get('/admin/staff/get/all', checkToken, displayStaff);
router.get('/admin/staff/get/one/:staff_id', checkToken, getStaffDetail);
router.get('/admin/staff', checkToken, searchStaff);

//Programme get routes
router.get('/admin/program/get/all', checkToken, displayPrograms);
router.get('/admin/program/get/one/:id', checkToken, getProgramDetail);
router.get('/admin/program', checkToken, searchProgram);

//Subject get routes
router.get('/admin/subject/get/all', checkToken, displaySubjects);
router.get('/admin/subject/get/one/:id', checkToken, getSubjectDetail);
router.get('/admin/subject', checkToken, searchSubject);

//Class get routes
router.get('/admin/class/get/all', checkToken, displayClasses);
router.get('/admin/class/get/one/:id', checkToken, getClassDetail);
router.get('/admin/class', checkToken, searchClass);

//Admin get routes
router.get('/admin/get/details', getAdminDetails);

//Admin Logout route
router.get('/admin/logout', handleLogout);

router.patch('/admin/student/update/:index_number', checkToken, modifyStudent);
router.delete('/admin/student/delete/:index_number', checkToken, removeStudent);

router.patch('/admin/staff/update/:staff_id', checkToken, modifyStaff);
router.delete('/admin/staff/delete/:staff_id', checkToken, removeStaff);

router.patch('/admin/program/update/:id', checkToken, modifyProgram);
router.delete('/admin/program/delete/:id', checkToken, removeProgram);

router.patch('/admin/subject/update/:id', checkToken, modifySubject);
router.delete('/admin/subject/delete/:id', checkToken, removeSubject);

router.patch('/admin/class/update/:id', checkToken, modifyClass);
router.delete('/admin/class/delete/:id', checkToken, removeClass);


module.exports = router;