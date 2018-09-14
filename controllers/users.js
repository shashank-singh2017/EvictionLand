/*
 *
 * Get Login Page
 * A user can login to the EvictionLand by hitting /users/login
 *
 */

module.exports.login = function(req,res) {
    res.render('../views/login');
};

/*
 *
 * Get  Page
 * A user can login to the EvictionLand by hitting /users/login
 *
 */

module.exports.signup = function(req,res) {
    res.render('../views/signup');
};
