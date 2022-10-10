const express = require('express');
const usersControllers = require('../controllers/user.controller');
const limiter = require('../middleware/limiter');
const viewCount = require('../middleware/viewCount');


const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('user can founded id one')
// });

// router.post('/', (req, res) => {
//     res.send('user can added')
// })

// limiter,

router
    .route('/all')
        .get(usersControllers.getAllUsers)

        .post(usersControllers.saveAUser);
    
    router
    .route("/:id")
    .get( viewCount, usersControllers.getUserDetail)
    .patch( usersControllers.updateUser)
    .delete(usersControllers.deleteUser)

module.exports = router;