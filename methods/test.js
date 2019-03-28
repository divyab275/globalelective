authMethods = require('./authentication')

authMethods.authenticateUser("nizar01","hello")
.then(res=>{
    console.log(res)
})
.catch(err=>{
   console.log("FailureS")
})