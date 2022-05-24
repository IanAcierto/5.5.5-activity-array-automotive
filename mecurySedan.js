//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class car extends Vehicle{
    constructor(make,model,year,color,mileage){
        super(make,model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    loadPassenger(num){
        let addNum= passenger + num
        return addNum
        if (addNum<maxpassengers){
            console.log('there is enough room');
        }
        else{
            console.log('there is not enough room');
        }
    }

    start(){
        if (fuel > 0){
            console.log('the vehicle starts');
            return this.started = true;
        }
        else{
            console.log("thevehicle doesn't start")
            return this.started = false;
        }

    };

    function checkService(){
        if (mileage > 300000){
            scheduleService = true;
            return this.scheduleService
        }
    }
}