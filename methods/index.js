const methods = {};     

methods.advisor = require('./advisor')
methods.user = require('./user')
methods.department = require('./department')
methods.course  = require('./course')
methods.student  = require('./student')
methods.preference = require('./preference')

module.exports = methods;