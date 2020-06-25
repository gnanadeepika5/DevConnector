const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  let errors={};
    if(!validator.isLength(data.name, {min:2, max:30}))
    {
      errors.name = ' Name should be between 2 and 30 charaters';
    }
    
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
    if(isEmpty(data.password2)){
      errors.password2 = 'confirm password field is required'
    }
    if(!validator.equals(data.password, data.password2))
    {
      errors.password2 = 'passwords must match';
    }

    return { errors,//errors:errors
             isValid: isEmpty(errors)
    }
}