
'user strict';
var sql = require('../config/db.js');
console.log('user module is running');
//User object constructor
var User = function(user){
    this.user = user;
};


User.findOne=function findUser(newUser, result){
    console.log('aj');
    console.log(newUser.email);
    return(1);
    
    //demo
    /*
    var userEmail=newTask.task.email;
    console.log(newTask); 
    sql.query("Select email from users where email = ? ", userEmail, function (err, res) {             
      if(err) {
          console.log("error: ", err);
          result(err, null);
      }
      else{
          result(null, res);
      }
  });  */ 
    
  },

  User.save= function save(newUser, result){
    console.log('aj save');
    console.log(newUser);
    sql.query("INSERT INTO user(name,email,password,status) VALUES(?,?,?,?)", Object.values(newUser), function (err, res) {

        if(err) {
        console.log("error: ", err);
        return(0);
        }
        else{
        console.log(res.insertId);
        return(res.insertId);
        
        }
        });   
    
  }


module.exports = User;