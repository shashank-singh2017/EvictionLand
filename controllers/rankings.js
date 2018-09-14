/*
 *
 * Get Rankings Page
 * A user can see top 100 cities highest eviction rates by hitting /rankings/
 *
 */

module.exports.rankings = function(req,res) {
    res.render('../views/rankings');
};