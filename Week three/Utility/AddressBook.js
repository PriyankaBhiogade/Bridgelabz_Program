var read = require('readline-sync')
var util = require('../../Week one/Algorithm_utility/utility')
var file = require('fs')
var p = file.readFileSync('AddressBook.json', 'utf8');

nameRestriction = /[a-z]/g;
contactRestriction = /[0-9]/g;

class Address {
    constructor(address) {
        this.address = address;
    }

    createProfile(address) {
        var fName = read.question("Enter the First Name:: ");
        while (nameRestriction.test(fName) == false) {
            console.log("No Special characters ..Invalid Name! ");
            fName = read.question("ReEnter First Name:: ");
        }
        var lName = read.question("Enter the Last Name :: ");
        while (nameRestriction.test(lName) == false) {
            console.log("No Special Characters....Invalid Name! ")
            lName = read.question("ReEnter the Last Name:: ")
        }
        console.log()
        console.log("******Address Details******")
        console.log()
        var street = read.question("Enter Street:: ")
        var city = read.question("Enter City :: ")
        while (nameRestriction.test(city) == false) {
            console.log("No Special characters ..Invalid City! ");
            city = read.question(" ReEnter City:: ")
        }

        var state = read.question("Enter the State:: ")
        while (nameRestriction.test(state) == false) {
            console.log("No Special characters ..Invalid State! ");
            state = read.question("ReEnter State:: ")
        }

        var nation = read.question("Enter Nationality:: ")
        while (nameRestriction.test(nation) == false) {
            console.log("No Special characters ..Invalid Nationality! ");
            nation = read.question(" ReEnter Nationality: ")
        }

        var zip = read.question("Enter the Zip Code:: ")
        while (contactRestriction.test(zip) == false && zip.length != 6) {
            console.log("Enter 6 digit Number..Invalid Zip Code! ");
            zip = read.question("ReEnter Zip Code:: ")
        }

        var phoneNum = read.question("Enter Phone Number:: ")
        while (contactRestriction.test(phoneNum) == false && phoneNum.length != 10) {
            console.log("Enter 10 digit Phone Number ..Invalid Name! ");
            phoneNum = read.question("ReEnter Phone Number:: ")
        }

        address.Person.push(
            {
                "Name": fName,
                "LastName": lName,
                "Address": {
                    "Street": street,
                    "City": city,
                    "State": state,
                    "Nationality": nation,
                    "Zip Code": zip,
                    "PhoneNum": phoneNum
                }
            })
        file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Your Information As Per Our Record IS:\n \r Name: " + fName + "\n \r Last Name: " + lName)
        console.log("Address:: " + street + "," + city + ',' + state + ',' + nation + ',' + zip)
        console.log("Phone Number is: " + phoneNum)
    }

    updateProfile(address) {
        var temp = -1;
        if (address.Person.length > 0) {
            for (let i = 0; i < address.Person.length; i++) {
                console.log("Address book Details:  ")
                console.log(address.Person[i]);
                console.log();
            }
            console.log()
            console.log("**Welcome**")
            console.log()
            var name = read.question("Enter the Name of the Profile:: ")
            for (var k = 0; k < address.Person.length; k++) {
                if (name == address.Person[k].Name) {
                    console.log("What Do you Want to do ? ")
                    console.log("1 : Update Address")
                    console.log("2 : Delete")
                    console.log("3 : Sort")
                    console.log("4 : Save")
                    console.log("5 : Exit")

                    var key = read.question("Enter your Choice: ")
                    switch (parseInt(key)) {
                        case 1:
                            /**
                             * Update Address
                             */
                            console.log("What Do You want to Update ?")
                            console.log("1 : Street")
                            console.log("2 : City")
                            console.log("3 : State")
                            console.log("4 : Nationality")
                            console.log("5 : Zip Code")
                            console.log("6 : Phone Number")

                            var choice = read.question("Enter Your Choice: ")
                            switch (parseInt(choice)) {
                                case 1:
                                    //Street Update
                                    var sUpdate = read.question("Enter New Street:: ")
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": address.Person[k]["Address"].City,
                                            "State": address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": address.Person[k]["Address"].Zip,
                                            "PhoneNum": address.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    address.Person[k] = obj;
                                    save();
                                    break;
                                case 2:
                                    //City Update
                                    var cUpdate = read.question(" Enter New City :: ")
                                    while (nameRestriction.test(cUpdate) == false) {
                                        console.log("No Special characters ..Invalid City! ");
                                        cUpdate = read.question(" ReEnter New City:: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": address.Person[k]["Address"].State,
                                            "Nationality": address.Person[k]["Address"].Nation,
                                            "Zip": address.Person[k]["Address"].Zip,
                                            "PhoneNum": address.Person[k]["Address"].PhoneNum
                                        }

                                    }
                                    address.Person[k] = obj;
                                    save()
                                    break;
                                //State Update
                                case 3:
                                    var stUpadate = read.question("Enter the New State:: ")
                                    while (nameRestriction.test(stUpadat) == false) {
                                        console.log("No Special characters ..Invalid State! ");
                                        stUpadat = read.question("ReEnter New State:: ")
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Street"].Street,
                                            "City": address.Person[k]["City"].City,
                                            "State": stUpdate,
                                            "Nationality": address.Person[k]["Nationality"].Nation,
                                            "Zip": address.Person[k]["Zip Code"].Zip,
                                            "PhoneNum": address.Person[k]["Phone Number"].PhoneNum
                                        }

                                    }
                                    address.Person[k] = obj;
                                    save()
                                    break;
                                //Nationality Update

                                case 4:
                                    var nUpadte = read.question("Enter New Nationality:: ")
                                    while (nameRestriction.test(nUpadte) == false) {
                                        console.log("No Special characters ..Invalid Nationality! ");
                                        nUpadte = read.question(" ReEnter New Nationality: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Street"].Street,
                                            "City": address.Person[k]["City"].City,
                                            "State": address.Person[k]["State"].State,
                                            "Nationality": nUpdate,
                                            "Zip": address.Person[k]["Zip Code"].Zip,
                                            "PhoneNum": address.Person[k]["Phone Number"].PhoneNum
                                        }

                                    }
                                    address.Person[k] = obj;
                                    save()
                                    break;

                                //Zip Code Update
                                case 5:
                                    var zUpdate = read.question("Enter New Zip Code:: ")
                                    while (contactRestriction.test(zUpdate) == false && zip.length != 6) {
                                        console.log("Enter 6 digit Number..Invalid Zip Code! ");
                                        zUpdate = read.question("ReEnter New Zip Code:: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Street"].Street,
                                            "City": address.Person[k]["City"].City,
                                            "State": address.Person[k]["State"].State,
                                            "Nationality": address.Person[k]["Nationality"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": address.Person[k]["Phone Number"].PhoneNum
                                        }

                                    }
                                    address.Person[k] = obj;
                                    svae()
                                    break;

                                //Phone number update

                                case 6:
                                    var pUpdate = read.question("Enter New Phone Number:: ")
                                    while (contactRestriction.test(pUpdate) == false && phoneNum.length != 10) {
                                        console.log("Enter 10 digit Phone Number ..Invalid Name! ");
                                        pUpdate = read.question("ReEnter New Phone Number:: ")
                                    }
                                    var obj = {
                                        "Name": address.Person[k].Name,
                                        "LastName": address.Person[k].LastName,
                                        "Address": {
                                            "Street": address.Person[k]["Street"].Street,
                                            "City": address.Person[k]["City"].City,
                                            "State": address.Person[k]["State"].State,
                                            "Nationality": address.Person[k]["Nationality"].Nation,
                                            "Zip": address.Person[k]["Zip Code"].Zip,
                                            "PhoneNum": pUpdate,
                                        }

                                    }
                                    address.Person[k] = obj;
                                    save()
                                    file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8');
                                    break;

                                case 7:
                                    console.log("Thank You.....")
                                    break;
                            }
                            break;


                        /**
                         * Delete Index
                         */
                        case 2:
                            var update = read.question("Enter the Name which You want to Delete: ")
                            for (let i = 0; i < address.Person.length; i++) {
                                if (address.Person[i].Name == update) {
                                    var index = address.Person.indexOf(address.Person[i])

                                    address.Person.splice(index, 1)
                                    
                                   

                                }

                            }
                            save()
                            console.log("Delete Sucessfully.......")
                            break;

                        /**
                         * Sort Last Name
                         */
                        case 3:
                            var temp;
                            for (let i = 0; i < address.Person.length; i++) {
                                for (let j = 0; j < address.Person.length - 1; j++) {
                                    if (address.Person[j].LastName.localeCompare(address.Person[j + 1].LastName) == 1) {
                                        temp = address.Person[j];
                                        address.Person[j] = address.Person[j + 1];
                                        address.Person[j + 1] = temp;


                                    }
                                }
                            }
                            console.log(address)
                            // address.Person[k] = obj;
                            save()
                            // file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8');
                            break;

                        /**
                         * Save new Updation
                         */
                        case 4:
                            function save() {
                                file.writeFile('AddressBook.json', JSON.stringify(address), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                                //file.writeFile('AddressBook.json', JSON.stringify(address), 'utf -8')

                            }
                            break;

                        case 5:

                            console.log('Thank You......')
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }



            }

        }
        else {

            console.log("Profile Unavilable ....Please create New One ")
            this.createProfile(address)

        }

    }


    displayDetail(address) {
        if (address.Person.length > 0) {
            for (let i = 0; i < address.Person.length; i++) {
                console.log(address.Person[i])
            }
        }
    }

    deleteDetail(address) {
        var update = read.question("Enter the Name which You want to Delete: ")
        for (let i = 0; i < address.Person.length; i++) {
            if (address.Person[i].Name == update) {
                var index = address.Person.indexOf(adress.Person[i])

                address.Person.splice(index, 1)

            }

        }
        console.log("Delete Sucessfully.......")


    }
}
module.exports = {
    Address
}
