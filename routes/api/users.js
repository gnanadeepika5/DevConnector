// const express =require('express');
// const router = express.Router();
// const User = require('../../models/User');
// //test route
// // router.get('/test', (req,res)=> res.json({msg:'users worked'}));
// //@route POST api/users/register (getting data from client and write it into db so using POST router)

// //descriptionabout register a user

// //access to public (any one can  be able  to see this as anyne should be able to register for a website)
// router.post('/register', (req,res) => {
//   User.findOne({email : req.body.email}) // find atleast one record  in the db of email same as the one passing in the request body which is sent by the UI(Client))
//    .then(userdata =>
//     {
//       if (userdata)
//       {
//         return res.status(400).json({email: 'Email already exists'});
//       }
//       else{
//         const newUser = new User({
//           name: req.body.name,
//           email:req.body.email,
//           password:req.body.password
//         });
//         newUser.save()
//           .then(userdata => res.json(userdata))
//           .catch(err => console.log(err))
//       }

//     }
//     ) //even if one rdcord is not found but the call to db is success, then will be the result. so writing va;idation in then()
//    .catch(err => console.log(err)) // id db is not connected then comes here
   
// })

// module.exports = router;



const express = require('express');
const router = express.Router();
const User = require('../../models/User');

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user){
        return res.status(400).json({email: 'Email already exists'});
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
        newUser.save()
          .then(user => res.json(user) )
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
})


module.exports = router;