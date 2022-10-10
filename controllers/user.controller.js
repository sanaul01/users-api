let users = require('../JsonFile/users.json')


module.exports.getAllUsers = (req, res)=>{
    const {limit, page} = req.query;
    console.log(limit, page)
    res.json(users.slice(0, limit))
};

module.exports.saveAUser = (req, res)=>{
    console.log(req.body);
    users.push(req.body);
    res.send(users)
};

module.exports.getUserDetail = (req,res) =>{
    const {id} = req.params;
    const foundUser = users.find(user => user.id === Number(id))
    res.json(foundUser)
};

module.exports.updateUser = (req, res) =>{
    // const newData = req.body;
    const {id} = req.params;
    // const filter = {_id: id};
    const newData = users.find(user=> user.id === Number(id));
    newData.id = id;
    newData.name = req.body.name;
    newData.gender = req.body.gender;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;

    res.send(newData)
};

module.exports.deleteUser = (req, res) =>{
    const {id} = req.params;
    // const filter = {_id: id};

    users = users.filter(user => user.id !== Number(id));

    res.send(users);
};