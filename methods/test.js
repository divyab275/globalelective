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

userID = "sdasd";
name = "sakhi";
password = "dasddf";
privilege = 2;

userMethods.addUser({"userID":userID,"name":name,"password":password,"privilege":privilege})
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err)
})

advMethods.addAdvisor({"advisorID":"sdasd","name":"sakhoi","deptId":2})
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.log(err);
})