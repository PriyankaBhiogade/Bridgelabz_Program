
var read = require('readline-sync');

var file = require('fs');

var p = file.readFileSync('AddressBook.json', 'utf8');
/*
*Regex
*/
nameRestriction = /[a-z]/g;
contactRestriction = /[0-9]/g;
/*
*/
class Address {
    constructor(addressb) {
        this.addressb;
    }
    createAddress(addressb) {
        var name = read.question("enter your first name: ");
        while (nameRestriction.test(name) == false) {
            name = read.question("No special characters Invalid name! :");
        }
        var lastName = read.question(" enter your last name: ");
        while (nameRestriction.test(lastName) == false) {
            lastName = read.question("No special characters Invalid name! :");
        }
        console.log("***Address Information***");
        var street = read.question("Street: ");
        var city = read.question("City: ");
        while (nameRestriction.test(city) == false) {
            city = read.question(" No special characters city! :");
        }
        var state = read.question("State: ");
        while (nameRestriction.test(state) == false) {
            state = read.question(" No special characters state! :");
        }
        var nation = read.question("Nationality: ");
        while (nameRestriction.test(nation) == false) {
            nation = read.question(" No special characters Nationality! :");
        }
        var zip = read.question("Zip code: ");
        while (contactRestriction.test(zip) == false || zip.length != 6) {
            zip = read.question("Enter the zip code 6 digits only : ");
        }
        var phoneNum = read.question("Phone number: ");
        while (contactRestriction.test(phoneNum) == false || phoneNum.length != 10) {
            phoneNum = read.question(" Enter PhoneNumber 10 digits only :");
        }
        addressb.Person.push({
            "Name": name,
            "LastName": lastName,
            "Address": {
                "Street": street,
                "City": city,
                "State": state,
                "Nationality": nation,
                "Zip": zip,
                "PhoneNum": phoneNum
            }
        })
        file.writeFile('AddressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
            if (err) throw err
            console.log('Done!');
        })
        console.log("Address updated succesfully!");
        console.log("Your information as per our record is: \r\n First Name: " + name + "\r\nLast Name: " + lastName + "\r\nStreet: " + street + "\r\nCity: " + city + "\r\nState: " + state + "\r\nNationality: " + nation);
    }


    openProfile(addressb) {
        var temp = -1;
        if (addressb.Person.length > 0) {
            for (var i = 0; i < addressb.Person.length; i++) {
                console.log(addressb.Person[i]);
            }
            console.log("Welcome!!");
            var update = read.question("Please enter the name of profile: ");
            for (var k = 0; k < addressb.Person.length; k++) {
                if (update == addressb.Person[k].Name) {
                    temp = k;
                    console.log("What you want to do?");
                    console.log("1: Update");
                    console.log("2: Delete");
                    console.log("3: Sort");
                    console.log("4: Save");
                    console.log("5: Exit");
                    var choice2 = read.question("Please enter your choice: ");
                    switch (parseInt(choice2)) {
                        case 1:
                            /**
                            * update profile
                            */
                            console.log("What do you want to update? ");
                            console.log("1: Street");
                            console.log("2: City");
                            console.log("3: State");
                            console.log("4: Nationality");
                            console.log("5: Zip code");
                            console.log("6: Phone");
                            console.log("7: Exit");
                            var choice3 = read.question("Please enter your choice: ");
                            switch (parseInt(choice3)) {
                                case 1:
                                    var sUpdate = read.question("Enter the new street number: ");
                                    while (nameRestriction.test(sUpdate) == false && sUpdate.length > 3) {
                                        sUpdate = read.question("No special characters Invalid name! :");
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": sUpdate,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 2:
                                    var cUpdate = read.question("Enter the new city name: ");
                                    while (nameRestriction.test(cUpdate) == false && cUpdate.length > 3) {
                                        cUpdate = read.question("No special characters Invalid name! :");
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": cUpdate,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 3:
                                    var stUpdate = read.question("Enter the new state name: ");
                                    while (nameRestriction.test(stUpdate) == false && stUpdate.length > 3) {
                                        stUpdate = read.question("No special characters Invalid name! :");
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": stUpdate,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 4:
                                    var nUpdate = read.question("Enter the new nation name: ");
                                    while (nameRestriction.test(nUpdate) == false && nUpdate.length > 3) {
                                        nUpdate = read.question("No special characters Invalid name! :");

                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": nUpdate,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 5:
                                    var zUpdate = read.question("Enter the new zip code: ");
                                    while (contactRestriction.test(zUpdate) == false) {
                                        zUpdate = read.question("No special characters Invalid number! :")
                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": zUpdate,
                                            "PhoneNum": addressb.Person[k]["Address"].PhoneNum
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    save();
                                    break;
                                case 6:
                                    var pUpdate = read.question("Enter the new phone number: ");
                                    while (contactRestriction.test(pUpdate) == false || pUpdate.length != 10) {
                                        pUpdate = read.question("No special characters Invalid number! :");

                                    }
                                    var obj = {
                                        "Name": addressb.Person[k].Name,
                                        "LastName": addressb.Person[k].LastName,
                                        "Address": {
                                            "Street": addressb.Person[k]["Address"].Street,
                                            "City": addressb.Person[k]["Address"].City,
                                            "State": addressb.Person[k]["Address"].State,
                                            "Nationality": addressb.Person[k]["Address"].Nation,
                                            "Zip": addressb.Person[k]["Address"].Zip,
                                            "PhoneNum": pUpdate
                                        }
                                    }
                                    addressb.Person[k] = obj;
                                    file.writeFile('AddressBook.json', JSON.stringify(addressb), 'utf-8');
                                    break;
                                case 7:
                                    console.log("ThankYou!");
                                    break;
                            }
                            break;
                        case 2:
                            var update = read.question("Please enter the index you want to delete: ");
                            delete addressb.Person[update];
                            for (var k = 0; k < addressb.Person.length; k++) {
                                if (addressb.Person[k] == null) {
                                    addressb.Person.splice(k, 1);
                                }
                            }
                            file.writeFile('AddressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                if (err) throw err
                                console.log('Done!')
                            })
                            break;
                        case 3:
                            //person.sort(GetSortOrder("EmployeeName")); //Pass the attribute to be sorted on  
                            Person.sort(getSortOrder(Name));
                            console.log("Sorted Employee Names : ");
                            for (var item in person) {
                                console.log(Person[item].Name);
                            }

                            break;
                        case 4:
                            function save() {
                                file.writeFile('AddressBook.json', JSON.stringify(addressb), 'utf-8', function (err) {
                                    if (err) throw err
                                    console.log('File Saved!!')
                                })
                            }
                            file.writeFile('AddressBook.json', JSON.stringify(addressb), 'utf-8');
                            break;
                        case 5:
                            console.log("ThankYou!!");
                            break;
                        default:
                            console.log("Please enter valid option");
                            break;
                    }
                }
            } if (temp == -1) {

                console.log("Profile unavailable!!Please create new one.");
            }
        }
        else {
            console.log("No profiles to display!!Please create a new profile!");
            this.createAddress();
        }
    }
}

module.exports = {
    Address
}

