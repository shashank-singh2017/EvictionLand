/*
 *
 * Get Login Page
 * A user can login to the EvictionLand by hitting /users/login
 *
 */

//var loginPage =require('../views/login.ejs');

module.exports.login = function(req,res) {
    res.render('../views/login');
};