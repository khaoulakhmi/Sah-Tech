var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "asmamohamed",
});

con.connect(function(err) {
  if (err) throw(err);
  console.log("Connected!");
});


/*
Create Your Own Modules
You can create your own modules,
 and easily include them in your applications.

The following example creates a module that
 returns a date and time object: 
 we saved this code on page by name
 myfirstmodule.js */ 
 

/*exports.myDateTime = function () {
  return Date();
};*/
/* Include Your Own Module
the module is the name of page that has the code 
*/
//var dt = require('./myfirstmodule');

