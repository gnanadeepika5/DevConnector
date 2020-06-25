const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data){
  let errors={};
    
    if(!validator.isEmail(data.email))
    {
      errors.email = 'email is invalid';
    }

    if(isEmpty(data.email))
    {
      errors.email = 'email field is required';
    }
    if(!validator.isLength(data.password, {min:6, max:10}))
    {
      errors.password = ' Name should be between 6 and 10 charaters';
    }
    if(isEmpty(data.password))
    {
      errors.password = 'password field is required';
    }

    return { errors,//errors:errors
             isValid: isEmpty(errors)
    }
}