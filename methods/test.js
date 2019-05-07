authMethods = require('./authentication')

// authMethods.authenticateUser("nizar01","hello")
// .then(res=>{
//     console.log(res)
// })
// .catch(err=>{
//    console.log("FailureS")
// })
advMethods = require('./advisor')
userMethods = require('./user');
courseMethods = require('./course');
studentMethods = require('./student');
preferenceMethods = require('./preference');
allotmentMethods = require('./allotment')
departmentMethods = require('./department')

// userID = "sdasd";
// name = "sakhi";
// password = "dasddf";
// privilege = 2;

// userMethods.addUser({"userID":userID,"name":name,"password":password,"privilege":privilege})
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// })

// advMethods.addAdvisor({"advisorID":"sdasd","name":"sakhoi","deptId":2})
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// authMethods.registerAdvisor({
//     userID : 'nizar01',
//     name : 'nizar',
//     password : 'hello'
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// })

// authMethods.registerStudent({
//     regID : 'stud1',
//     name : 'divyab',
//     password : 'divyab',
//     cgpa : 9.4
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// })

// authMethods.registerStudent({
//     regID : 'stud4',
//     name : 'jeena',
//     password : 'stud4',
//     cgpa : 9.2
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// })

// authMethods.registerStudent({
//     regID : 'stud5',
//     name : 'nakki',
//     password : 'stud3',
//     cgpa : 9.8,
//     deptID : 1,
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// })

// authMethods.registerStudent({
//     regID : 'stud2',
//     name : 'monce',
//     password : 'stud2',
//     cgpa : 9.6
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err)
// })

// courseMethods.addCourse({
//     courseID : 'C01',
//     name : 'CN',
//     capacity : 100,
//     filled : 0,
//     deptID : 1
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })


// courseMethods.addCourse({
//     courseID : 'C01',
//     name : 'CN',
//     capacity : 100,
//     filled : 0,
//     deptID : 1
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })


// courseMethods.addCourse({
//     courseID : 'C01',
//     name : 'CN',
//     capacity : 100,
//     filled : 0,
//     deptID : 1
// })
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// studentMethods.getStudentID('stud4')
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// preferenceMethods.addStudentPreference(
//     [ { courseID: '2', studentID: 7, preferenceLevel: 1 },
//   { courseID: '3', studentID: 7, preferenceLevel: 2 },
//   { courseID: '1', studentID: 7, preferenceLevel: 3 } ]
// )
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// studentMethods.getAllStudentsDesc()
// .then(res => {
//    console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })
preferenceMethods.deletePreference("abc1",1,2,3)
.then(res=>{
	console.log(res);

})
.catch(err=>{
	console.log(err);
})
// preferenceMethods.getStudentPreferences([7,6])
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// courseMethods.getAllCourses()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// courseMethods.getAllCourseDetails()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// allotmentMethods.allot()
// .then(res =>{
//     console.log(res);
// })
// .catch(err => {
//     console.log(err)
// })

// studentMethods.allowedCourses('stud4')
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// departmentMethods.getCoursesElligibleForDept([2])
// .then( res=> {
//     console.log(res)
// })
// .catch( err => {
//     console.log(err)
// })

// allotmentMethods.bulkCreate([{courseID:1,studentID:6},{courseID:2,studentID:7},{courseID:1,studentID:5}])
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// allotmentMethods.getAllAllotments()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// allotmentMethods.getAllotmentList()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// studentMethods.getAllStudentDetails()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// preferenceMethods.hasMarkedPreference("stud3")
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })


// authMethods.registerAdmin({
//     userID : 'admin',
//     name : 'admin',
//     password : 'admin'
// })
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// departmentMethods.getDepts()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// userMethods.changePassword('stud1','stud1')
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// courseMethods.getCourses()
// .then(res => {
//     console.log(res)
// })
// .catch(err => {
//     console.log(err)
// })

// allotmentMethods.getAllotment('stud3')
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

// courseMethods.getCourse(1)
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })