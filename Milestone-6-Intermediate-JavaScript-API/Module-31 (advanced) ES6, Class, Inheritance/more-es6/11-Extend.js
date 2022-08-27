
class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location
    }
    provideFeedback() {
        console.log(`${this.name} Thnk you for your feedback`)
    }
}
// Syntactical Sugar
class Instructor extends TeamMember {

    designantion = 'Web Course Instructor'
    item = 'web team'

    constructor(name, location) {
        super(name, location)
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`)
    }
    createQuize(module) {
        console.log(`Please crete quize for module ${module}`)
    }

}
class Developer extends TeamMember {
    designantion = 'Web Course Instructor'
    item = 'web team'
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developfeatures(feature) {
        console.log(`Please develope the ${feature}`)
    }
    release(version) {
        console.log(`Please release the version ${version}`)
    }
}
class JobPlacement extends TeamMember {
    designantion = 'Job Placement Commandos'
    item = 'Job Placement'
    constructor(name, location, region) {
        super(name, location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`Please develope the ${feature}`)
    }
    prepareStudent(version) {
        console.log(`Please release the version ${version}`)
    }
}

const alia = new Developer('Alia Bhat', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('Bipasah', 'Kolkata', 'India')
console.log(bipasha);
