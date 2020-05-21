const { Router} = require('express');
const router = Router();


const { getUsers, getUserById, createUser, deleteUser, updateUser }= require('../controllers/index.controllers');

router.get('/users', getUsers);
router.get ('/users/:id', getUserById);
router.post('/create-users', createUser);
router.delete('/delete-users/:id', deleteUser);
router.put('/update-users/:id', updateUser);



module.exports = router;
