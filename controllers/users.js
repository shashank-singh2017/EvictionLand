/*
 *
 * Get Login Page
 * A user can login to the EvictionLand by hitting /users/login
 *
 */

module.exports.login = function(req,res) {
    var loginPage = '<DOCTYPE html>\n'
                    + '<html lang="en-us">\n'
                    + '<head>\n'
                    + '   <meta charset="UTF-8">\n'
                    + '   <title>Login to EvictionLand</title>\n'
                    + '</head>\n'
                    + '<body>\n'
                    + '<input type="text" />\n'
                    + '<button name="submit">Login</button>\n'
                    + '</body>\n'
                    + '</html>\n';

    res.send(loginPage);

};