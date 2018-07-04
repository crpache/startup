class Logger {
  constructor(name){
    this.name = name;
  }
  log(info){
    console.log("The " + info + " event has been emitted");
  }

}

class EventEmitter {
  constructor(){
    this.events = {};
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
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }
  play(){
    this.emit("play");
  }
  pause(){
    this.emit("pause");
  }
  resume(){
    this.emit("resume");
  }
  addCast(actor){
    if(Array.isArray(actor)){
      Array.prototype.push.apply(this.cast, actor);
    }else{
      this.cast.push(actor);
    }
  }

}



let Social = {
  share: function(friendName){
    console.log(`Share ${this.title} with ${friendName}`);
  },
  like: function(friendName){
    console.log(`${friendName} likes ${this.title}`);
  }
}

class Actor {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}
