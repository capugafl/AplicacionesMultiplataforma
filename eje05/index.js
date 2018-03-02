var people = Array();
function createPeople() {
    var newPerson;
    for (var i = 0; i < 10; i++) {
        newPerson = {
            name: "Israel" + i,
            email: "i" + i + "@gmail.com",
            salary: (i + 10000),
            active: i % 2 === 0 ? true : false
        };
        people.push(newPerson);
    }
    function printPeople(config) {
        var newPerson = { name: "", email: "", salary: 0, active: false };
        if (config.name)
            newPerson.name = config.name;
        if (config.email && config.email.length >= 10)
            newPerson.email = config.email;
        if (config.salary)
            newPerson.salary = config.salary;
        if (config.active && config.active == true)
            newPerson.active = config.active;
        return newPerson;
    }
    var myPerson = printPeople({ name: createPeople.name, email: "fulanito@gmail.com", salary: 4000, active: true });
    console.log(myPerson);
}