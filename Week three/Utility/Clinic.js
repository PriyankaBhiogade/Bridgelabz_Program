
var readline = require('readline-sync');

   /** 
   *@description:to take all the id in the object into the array  
   *@param:taking parsed object from the user
   */
   class  Clinic
  {
    constructor(object) {
        this.object=object;
        }
        
     /** 
   *@description:to take all the names in the object into the array  
   *@param:taking parsed object from the user
   */
  getNameFromDoctor(object) {//it will give all thetotalCountames of stock in array
    var nameArray = []
    var data = object.Doctor
    for (let key in data) {//looping over each element
        nameArray.push(data[key].name)
    }
    return nameArray;//return array
}
/** 
*@description:to take all the id in the object into the array  
*@param:taking parsed object from the user
*/
getIdFromDoctor(object) {//it will give all the names of stock in array
    var nameArray = []
    var data = object.Doctor
    for (let key in data) {//looping over each element
        nameArray.push(data[key].Id)
    }
    return nameArray;//returnin array
}
getSpecialisationFromDoctor(object) {//it will give all specialisation in array
    var nameArray = []
    var data = object.Doctor
    for (let key in data) {//looping over each element
        nameArray.push(data[key].specialisation)
    }
    return nameArray;//returnin array
}
getNameFromPatient(object) {//it will give all thetotalCountames of stock in array
    var nameArray = []
    var data = object.Patient
    for (let key in data) {//looping over each element
        nameArray.push(data[key].name)
    }
    return nameArray;//returnin array
}
getIdFromPatient(object) {//it will give all thetotalCountames of stock in array
    var nameArray = []
    var data = object.Patient
    for (let key in data) {//looping over each element
        nameArray.push(data[key].Id)
    }
    return nameArray;//returnin array
}
/** 
*@description:to take all the phone numbers in the object into the array  
*@param:taking parsed object from the user
*/
getPhoneNumberFromPatient(object) {//it will give all specialisation in array
    var nameArray = []
    var data = object.Patient
    for (let key in data) {//looping over each element
        nameArray.push(data[key].phoneNumber)
    }
    return nameArray;//returnin array
}
  }
 
module.exports = {
    Clinic
    }
