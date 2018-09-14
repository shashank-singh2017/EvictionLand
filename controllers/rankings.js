/*
 *
 * Get Rankings Page
 * A user can see top 100 cities highest eviction rates by hitting /rankings/
 *
 */

var xlsx = require('xlsx');
var data = xlsx.readFile('./public/data/data.xlsx').Sheets.Sheet1;

module.exports.rankings = function(req,res) {
    var dataJsonArray = xlsx.utils.sheet_to_json(data).slice(0,10);

    res.render('../views/rankings', {data:dataJsonArray});
};

