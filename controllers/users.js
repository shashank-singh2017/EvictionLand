/*
 * Get Login Page
 * A user can login to the EvictionLand by hitting /users/login
 */
module.exports.login = function(req,res) {
    res.render('../views/login');
};

/*
 * Get Signup Page
 */
module.exports.signup = function(req,res) {
    res.render('../views/signup');
};

/*
 * Handle Signup
 */
module.exports.handleSignup = function(req,res) {
    console.log(req.body);
    console.log("signup successfull");
    res.redirect('/users/login');
};

/*
 * Handle Signin
 */
module.exports.handleSignin = function(req,res) {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if(email === 'cmpe280@gmail.com' && password === 'password') {
        res.redirect('/rankings');
    } else {
        res.redirect('/users/login');
    }
};