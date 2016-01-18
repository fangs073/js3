var dob = prompt("Enter DOB")
var phone = prompt("Enter phone number")
var zip = prompt("Enter zip code")
var state = prompt("Enter state")
var married = prompt("Are you married?")

var valid = false;

var dobTest = /^\d\d.\d\d.\d\d(\d\d)?$/.test(dob);
var phoneTest = /\d{3}.?\d{3}.?\d{4}/.test(phone);
var zipTest = /^\d{4}(-\d{4})?$/.test(zip);
var stateTest = /^[A-Z]{2}$/.test(state)
var married = /^yes|no$/i.test(married)

valid = dobTest || phoneTest || zipTest || stateTest || married;

alert(valid);