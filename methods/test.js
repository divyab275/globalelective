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
//     regID : 'stud3',
//     name : 'swathi',
//     password : 'stud3',
//     cgpa : 9.8
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

// studentMethods.getStudentID('stud4')
// .then(res=>{
//     console.log(res);
// })
// .catch(err=>{
//     console.log(err);
// })

preferenceMethods.addStudentPreference(
    [ { courseID: '1', studentID: 6, preferenceLevel: 1 },
  { courseID: '2', studentID: 6, preferenceLevel: 2 },
  { courseID: '1', studentID: 6, preferenceLevel: 3 } ]
)
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})