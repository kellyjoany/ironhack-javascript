// Rover Object Goes Here
// ======================

var rover = {
  direction: "n",
  line: 0,
  column: 0,
}
var track = []

function teste(dir){
  if(rover.direction === dir){
      if(rover.direction == "e" || rover.direction == "w"){
        if(rover.direction == "e"){
          rover.column += 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
        }
        if(rover.direction == "w"){
          rover.column -= 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
        }
      }
      if(rover.direction == "n" || rover.direction == "s"){
        if(rover.direction == "n"){
          rover.line -= 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
        }
        if(rover.direction == "s"){
          rover.line += 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
        }
      }
    return moveForward();
  } 

  //rover.direction = dir;
  switch(dir){
    case "n":
      if (rover.direction == "w"){
          rover.direction = dir;
          rover.line -= 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
          return turnRight();
      } else if (rover.direction == "e"){
          rover.direction = dir;
          rover.line -= 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
          return turnLeft();
      } else{
         console.log("cannot take the movement");
      }
    break;
    case "e":
      if (rover.direction == "n"){
          rover.direction = dir;
          rover.column += 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
          return turnRight();
      } else if (rover.direction == "s"){
          rover.direction = dir;
          rover.column += 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
          return turnLeft();
      } else{
          console.log("cannot take the movement");
      }
    break;
    case "s":
      if (rover.direction == "e"){
          rover.direction = dir;
          rover.line += 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
          return turnRight();
      } else if (rover.direction == "w"){
          rover.direction = dir;
          rover.line += 1;
          track.push([rover.line, rover.column]);
          console.log("position: " + rover.line,rover.column);
          return turnLeft();
      } else{
          console.log("cannot take the movement");
      }
    break;
    case "w":
      if (rover.direction == "s"){
        rover.direction = dir;
        rover.column -= 1;
        track.push([rover.line, rover.column]);
        console.log("position: " + rover.line,rover.column);
        return turnRight();
      } else if (rover.direction == "n"){
        rover.direction = dir;
        rover.column -= 1;
        track.push([rover.line, rover.column]);
        console.log("position: " + rover.line,rover.column);
        return turnLeft();
      } else{
        console.log("cannot take the movement");
      }
    break;  
    default:
      console.log("its not a direction");
    break;
  }
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
