// Syntactical Sugar
class Instructor {
    name;
    designantion = 'Web Course Instructor'
    item = 'web team'
    location;
    constructor(name, location) {
        this.name = name;;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`)
    }
    createQuize(module) {
        console.log(`Please crete quize for module ${module}`)
    }
}
const amir = new Instructor('amir', 'mumbai');
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuize(60);

const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman);