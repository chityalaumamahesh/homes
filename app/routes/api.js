var User = require('../models/user');
//changes are happens only on my issu
module.exports = function(router) {
//http://localhost:8080/users
    router.post('/users', function(req, res){
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;

        if(req.body.username == null || req.body.password == null || req.body.email == null){
            res.send('Ensure username, password and email were provided')
        }else{
            user.save(function(err){ 
                if(err){
                    res.send('username and password already exists');
                }
                else{
                    res.send('user is created successfully');
                }
            });
        }
    })
    return router;
}