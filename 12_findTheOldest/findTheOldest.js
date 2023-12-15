const findTheOldest = function(array) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let peoples = [];
    peoples = peoples.concat(array);

    peoples.forEach(person => {
        if (!person.yearOfDeath) {
            person.age = currentYear - person.yearOfBirth;
        } else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
    });

    peoples.sort((a, b) => b.age - a.age);
    return peoples[0];
};

// Do not edit below this line
module.exports = findTheOldest;
