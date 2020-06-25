//newer way to write below commented code after es6 or 7
const isEmpty = (value) =>
    value === undefined || 
    value ===null || 
    (typeof value === 'object' && Object.keys(value).length ===0) ||
     (typeof value ==='strng' && value.trim().length === 0)
  



//old way before ES6 OR 7 way to write it

// function isEmpty(value)
// {
//   return
//   (
//     value === undefined || value ===null || (typeof value === 'object' && Object.keys(value).length ===0) || (typeof value ==='strng' && value.trim().length === 0)
//   );;
// }
module.exports = isEmpty;



