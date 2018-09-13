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
                    + '   <link rel="stylesheet" href="/stylesheets/login.css"\n'
                    + '</head>\n'
                    + '<body>\n'
                    + '<div class="header"></div>\n'
                    + '<div class="loginForm">\n'
                    + '<input class="username" type="text" />\n'
                    + '<br>\n'
                    + '<input class="password" type="password" />\n'
                    + '<br>\n'
                    + '<button  class="okButton" name="submit">Login</button>\n'
                    + '</div>\n'
                    + '</body>\n'
                    + '</html>\n';

    res.send(loginPage);

};