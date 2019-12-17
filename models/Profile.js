
'user strict';
var sql = require('../config/db.js');
console.log('profile module is running');
//User object constructor
var Profile = function(profile){
    this.profile = profile;
};

Profile.findProfile=function findProfile(id, result){
    console.log('asasas'+id);
        return new Promise( ( resolve, reject ) => {
        sql.query("Select * from profile where user_id = ? ", id, function (err, res) {             
          if(err) {
              console.log("error Profile model: ", err);
              return reject( err );
          }
          else{
              
             return resolve(res);
          }
      }); 
        });  
        
      }

      module.exports = Profile;