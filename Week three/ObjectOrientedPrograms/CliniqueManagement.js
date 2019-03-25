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
console.log('1 to Search for Doctor')
console.log('2 to Search for Patient')
console.log('3 to Take Appointment')
console.log()
var ans = readline.question('Enter the choice : ')
while (ans != 4) {
    /** 
    *   @description:If the input is 1 then search for the Doctor
    */
    if (ans == 1) {
        console.log(' 1 to Search Doctor by his Name')
        console.log(' 2 to search Doctor by his Id')
        console.log(' 3 to Search Doctor by his Specialisation')
        var choice = readline.questionInt('Enter Your choice : ')
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
        console.log('1 to search patient by his Name')
        console.log('2 to search patient by his Id')
        console.log('3 to search patient by his Phonenumber')
        console.log()
        var choice = readline.questionInt('Enter Your Choice :: ')
        /** 
        *   @description:If the Input is 1 then search patient by his Name
        */
        if (choice == 1) {
            console.log("Name of the Patient are ::  " + data.getNameFromPatient(object))
            var name = readline.question('Enter the Name of the Patient :')
            while (!data.getNameFromPatient(object).includes(name)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('Enter The valid Name ')
                name = readline.question('Enter the Name of the Patient :: ')
            }
            for (let key in patient) {
                if (patient[key].name == name) {
                    console.log('Your Patient Details :: ')
                    console.log(patient[key])

                }
            }
        }
        /** 
        *   @description:If the Input is 2 then search patient by his ID
        */
        else if (choice == 2) {
            console.log("Id of the Patient are ::  " + data.getIdFromPatient(object))
            var Id = readline.question('Enter the Id of the patient:: ')
            while (!data.getIdFromPatient(object).includes(Id)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('Enter the Valid Id')
                Id = readline.question('Enter the Id of the patient:: ')
            }
            for (let key in patient) {
                if (patient[key].Id == Id) {
                    console.log('Your Patient Details :: ')
                    console.log(patient[key])
                }
            }
        }
        /** 
        *   @description:If the Input is 3 then search patient by his Phonenumber
        */
        else if (choice == 3) {
            console.log("Phonenumber of the Patients are :: " + data.getPhoneNumberFromPatient(object))
            var phoneNumber = readline.question('Enter the PhoneNumber of the Patient:: ')
            while (!data.getPhoneNumberFromPatient(object).includes(phoneNumber)) {//if the array includes the user giventotalCountame ony that time it will remove 
                console.log('Enter the valid Phonenumber')
                phoneNumber = readline.question('Enter the PhoneNumber of the Patient:: ')
            }
            for (let key in patient) {
                if (patient[key].phoneNumber == phoneNumber) {
                    console.log('Your Patient Details ::')
                    console.log(patient[key])
                }
            }

        }
        else {
            console.log('Enter Valid input :')
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

        var name = readline.question("Enter the Patient Name :: ")
        var age = readline.questionInt("Enter The Age of the Patient :: ")
        var Id = Math.floor(Math.random() * 100000)
        var phoneNumber = readline.questionInt('Enter the Phone Number ::')
        while (phoneNumber > 9999999999 || phoneNumber < 999999999) {
            console.log("Number should be of 10 Digit")
            phoneNumber = readline.questionInt('Enter Different Phone Number :: ')
        }
        console.log("Doctors that are present Are")
        console.log(data.getNameFromDoctor(object));
        var appointmentFrom = readline.question('Enter the Doctor Name from You want to Take Appointment :: ')
        patient.push({
            "Name": name,
            "Id": Id,
            "PhoneNumber": phoneNumber,
            "Age": age,
            "AppointmentFrom": appointmentFrom,
            "OnTheDayOf": day

        })
        fileStream.writeFileSync('clinicManage.json', JSON.stringify(object))
        console.log("Your Appointment is Confirmed On  :: " + day)

    }
    else
        console.log('Enter Valid Input :')
}