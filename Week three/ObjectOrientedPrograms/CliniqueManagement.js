const readline = require('readline-sync')
const util = require('../Utility/Clinic')
const fileStream = require('fs')

/**
 * Purpose      :   This programme is used to manage a list of Doctors associated with the 
                    Clinique also manages the list of patients who use the clinic
 * @file        :   CliniqueManagement.js
 * @overview    :   Create JSON object to read the data.
 * @author      :   PriyankaBhiogade
 * @version     :   1.0
 * @since       :   19-3-2019
 **/

var acess = fileStream.readFileSync('clinicManage.json')
object = JSON.parse(acess)
var data = new util.Clinic(object);

var doctor = object.Doctor;
var patient = object.Patient
var count = patient.length;
    console.log()
    console.log('****** ClinicManagment ******');
    console.log()
    console.log('1 to search for Doctor')
    console.log('2 to search for Patient')
    console.log('3 to take Appointment')
    console.log()
    var ans = readline.question('Enter the choice : ')
    while (ans != 4) {
    /** 
    *   @description:If the input is 1 then search for the Doctor
    */
    if (ans == 1) {
        console.log(' 1 to search doctor by his Name')
        console.log(' 2 to search doctor by his Id')
        console.log(' 3 to search doctor by his Specialisation')
        var choice = readline.questionInt('Enter ur choice : ')
        /** 
        *   @description:If the Input is 1 then search doctor by his Name
        */
        if (choice == 1) {
            data.getNameFromDoctor(object);
            /*
                      console.log(' 1 to search Dr.jon desoza')
                      console.log(' 2 to search Dr.narayan panji')
                      console.log(' 3 to search Dr.Kanchana')
                      console.log(' 4 to search Dr.Prasad gudde')
                      //var choice = readline.questionInt('enter ur choice :')
      
            if (choice == 1) {
                data.getNameFromDoctor(object);
                */
                console.log("Name of the doctors are ::  " + data.getNameFromDoctor(object));
                var name = readline.question('Enter the name of the Doctor : ')
                while (!data.getNameFromDoctor(object).includes(name)) {//if the array includes the user giventotalCountname any that time it will remove 
                    console.log('Enter The valid Name  ')
                    name = readline.question('Enter the correct name of the Doctor :')
                }
            
            for (let key in doctor) {
                if (doctor[key].name == name) {
                    console.log('Your doctor details : ')
                    console.log(doctor[key])
                }
            }
        }
        /** 
        *   @description:If the Input is 2 then search doctor by his Id
        */
        else if (choice == 2) {
            console.log("Id of the Doctors Are ::  " + data.getIdFromDoctor(object))
            var Id = readline.question('Enter the Id of the Doctor : ')
            while (!data.getIdFromDoctor(object).includes(Id)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('Enter the valid Id ')
                Id = readline.question('Enter the Id of the Doctor : ')
            }
            for (let key in doctor) {
                if (doctor[key].Id == Id) {
                    console.log('Your Doctor Details : ')
                    console.log(doctor[key])
                }
            }
        }
        /** 
        *   @description:If the Input is 3 then search doctor by his Specialisation
        */
        else if (choice == 3) {
            console.log("Specialisation of the doctors are ::  " + data.getSpecialisationFromDoctor(object))
            var specialisation = readline.question('Enter the specialisation of the Doctor: ')
            while (!data.getSpecialisationFromDoctor(object).includes(specialisation)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('Enter the valid specialisation')
                specialisation = readline.question('Enter the specialisation of the Doctor :  ')
            }
            for (let key in doctor) {
                if (doctor[key].specialisation == specialisation) {
                    console.log('Your Doctor Details :')
                    console.log(doctor[key])
                }
            }

        }
        else {
            console.log('Enter Valid Input')
        }
    }

    /** 
     * @description:if the input is 2 then search for the patients that are in the hospital
    */
    else if (ans == 2) {
        console.log()
        console.log('1 to search patient by his name')
        console.log('2 to search patient by his id')
        console.log('3 to search patient by his phonenumber')
        console.log()
        var choice = readline.questionInt('Enter Your Choice :: ')
        /** 
        *   @description:If the Input is 1 then search patient by his Name
        */
        if (choice == 1) {
            console.log("Name of the Patient are ::  " + data.getNameFromPatient(object))
            var name = readline.question('enter the name of the doctor :')
            while (!data.getNameFromPatient(object).includes(name)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('enter the valid name ')
                name = readline.question('enter the name u want to search : ')
            }
            for (let key in patient) {
                if (patient[key].name == name) {
                    console.log('ur patient details')
                    console.log(patient[key])
                }
            }
        }
        else if (choice == 2) {
            console.log("id of the patient are - " + data.getIdFromPatient(object))
            var Id = readline.question('enter the id of the patient: ')
            while (!data.getIdFromPatient(object).includes(Id)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('enter the valid Id')
                Id = readline.question('enter the Id u want to search : ')
            }
            for (let key in patient) {
                if (patient[key].Id == Id) {
                    console.log('ur patient details')
                    console.log(patient[key])
                }
            }
        }
        else if (choice == 3) {
            console.log("phonenumber of the patients are - " + data.getPhoneNumberFromPatient(object))
            var phoneNumber = readline.question('enter the phoneNumber of the patient')
            while (!data.getPhoneNumberFromPatient(object).includes(phoneNumber)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('enter the valid phonenum')
                phoneNumber = readline.question('enter the phonenumber u want to search : ')
            }
            for (let key in patient) {
                if (patient[key].phoneNumber == phoneNumber) {
                    console.log('ur patient details')
                    console.log(patient[key])
                }
            }

        }
        else {
            console.log('enter valid input :')
        }
    }
    /** 
     * @description:if the input is 3 then take the appointment from the doctor and give timing to the patients
    */
    else if (ans == 3) {
        count++;

        var date = new Date();
        if (count > 5) {
            var rem = Math.floor(count / 5)
            var day = (date.getDate()) + rem;
        }
        else {
            var day = date.getDate()
        }

        var name = readline.question("enter the patientname :")
        var age = readline.questionInt("enter the age of the patient :")
        var Id = Math.floor(Math.random() * 100000)
        var phoneNumber = readline.questionInt('enter the phoneNumber :')
        while (phoneNumber > 9999999999 || phoneNumber < 999999999) {
            console.log("number should be of 10 digit")
            phoneNumber = readline.questionInt('enter different phone number :')
        }
        console.log("doctors that are present are")
        console.log(data.getNameFromDoctor(object));
        var appointmentFrom = readline.question('enter the doctor name from u want to take appointment : ')
        patient.push({
            "name": name,
            "Id": Id,
            "phoneNumber": phoneNumber,
            "age": age,
            "appointmentFrom": appointmentFrom,
            "onTheDayOf": day

        })
        fileStream.writeFileSync('clinicManage.json', JSON.stringify(object))
        console.log("your appointment is confirmed on  :" + day)

    }
    else
        console.log('enter valid input :')
}