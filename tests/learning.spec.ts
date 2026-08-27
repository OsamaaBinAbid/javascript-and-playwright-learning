class Bulb {
    private isOn: boolean;
    onCount: number = 0;
    offCount: number = 0;

    constructor() {
        this.isOn = false;
        // this.onCount = 0;
        // this.offCount = 0;
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            this.onCount++;
            console.log("Bulb is turned on");
        }
        else {
            console.log("Bulb is already turned on");
        }

    }
    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            this.offCount++;
            console.log("Bulb is turned off");
        }
        else {
            console.log("Bulb is already turned off");
        }
    }
    currentState() {
        return this.isOn ? "Bulb is currently on" : "Bulb is currently off";
    }

}



class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

var manobilli = new Animal("Manobilli");
console.log(manobilli.name);

var bulb = new Bulb();
console.log(bulb.currentState());
bulb.turnOn();
bulb.turnOff();
bulb.turnOn();
// bulb.turnOff();
console.log(bulb.currentState());
console.log(bulb.offCount);
console.log(bulb.onCount);

