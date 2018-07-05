class Logger {
  constructor(){}
  log(info){
    //console.log(`The ${this.info} event has been emitted`);
    console.log(`The this.info event has been emitted`);
  }
}

class EventEmitter {
  constructor(){
    this.events = {};// Empty object to store events
  }
  on(eventName, fn){ // add events
    if(this.events[eventName] === undefined){
      this.events[eventName] = [];
    }
    this.events[eventName].push(fn);
  }
  emit(eventName, data){ // calls registered events
    const event = this.events[eventName];
    if(event){
      event.forEach( cb => cb.call(null,data));
    }
  }
  off(eventName){ // deletes event
    if(!(this.events[eventName] === undefined)){
      delete this.events[eventName];
    }
  }
}


class Movie extends EventEmitter { ///movie inherits all the methods of EventEmitter
  constructor(title,year,duration){
    super(); //calls properties from parent class(EventEmitter)
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play(){
    this.emit("play"); //calls emit event and sends "play" as an event
  }
  pause(){
    this.emit("pause");//calls emit event and sends "pause" as an event
  }
  resume(){
    this.emit("resume");//calls emit event and sends "resume" as an event
  }
  addCast(actor){ //adds actors to the cast array
    if(Array.isArray(actor)){ //if actor is an array :
      Array.prototype.push.apply(this.cast, actor);
    }else{ //if actor is a single object:
      this.cast.push(actor);
    }
  }
}



let Social = {
  share: function(friendName){
    console.log(`Shared ${this.title} with ${friendName}`);
  },
  like: function(friendName){
    console.log(`${friendName} likes ${this.title}`);
  }
}
Object.assign(Movie.prototype, Social);//Allows Movie instances to use Social methods

class Actor {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

//=============================================================
let starWars = new Movie("Star Wars",1985,120);
let toyStory = new Movie("Toy Story",1995,90);

let mark = new Actor("Mark Hamill",56);
let starCast = [
  new Actor("Carrie Fisher",60),
  new Actor("John Smith",54),
  new Actor("R2D2", 100)
];

let woody = new Actor("Woody", 30);
let toyCast = [
  new Actor("Buzz Lightyear",34),
  new Actor("Andy", 10)
];

let logger = new Logger();

starWars.on("play",logger.log);
starWars.on("pause",logger.log);
starWars.on("resume",logger.log);

toyStory.on("play",logger.log);
toyStory.on("pause",logger.log);
toyStory.on("resume",logger.log);

starWars.play();
starWars.pause();
starWars.resume();


starWars.addCast(mark);
starWars.addCast(starCast);
console.dir(starWars.cast);
