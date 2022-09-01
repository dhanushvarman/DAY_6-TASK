class Uber {
    constructor(rideId, pickup, destination, kmsTraveled, waitingTime, rate) {
      this.rideId = rideId;
      this.pickup = pickup;
      this.destination = destination;
      this.kmsTraveled = kmsTraveled;
      this.waitingTime = waitingTime;
      this.rate = rate;
    }
    get dist(){
        var distance=this.kmsTraveled;

        if(distance<=10){
            this.rate=40;
        }
        if(distance>10 && distance<=100){
            this.rate=35;
        }
        if(distance>100){
            this.rate=30;
        }
    }
    get waitingtime(){
        var time=this.waitingTime;

        if(time<=5){
            this.waitingTime=time*2;
        }
        if(time>5 && time<=10){
            this.waitingTime=time*3;
        }
        if(time>10){
            this.waitingTime=time*4;
        }
    }
    get price() {
      //using getter method
      const totalfare = this.kmsTraveled * this.rate + this.waitingTime;
      return totalfare;
    }
  }
let ride1 = new Uber(195, "koyambedu", "alwarpet", 10, 10, 20);
ride1.dist;
ride1.waitingtime;
console.log(`Total fare for the ride from ${ride1.pickup} to ${ride1.destination} is Rs.${ride1.price}.`);