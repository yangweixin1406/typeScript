function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var person = { firstName: 'Jack', lastName: 'Tom' };
document.body.innerHTML = greeter(person);
