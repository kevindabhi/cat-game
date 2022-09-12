

class Character {
    constructor(name, health, strength,food) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.food = food;
      this.xp = 0; // XP is always zero for new characters
    }


// Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength, ${this.food} food and ${this.xp} XP points`;
    }
  }
  const glacius = new Character("Glacius", 130, 30, 30);
  console.log(glacius.describe());
 

  document.getElementById("feed").addEventListener("click", function() {
    glacius.food += 20;
    console.log(glacius.describe());
    resetHunger()
  });
  
 

//document.getElementById("food").addEventListener("click", function(){


   window.onload = function exampleFunction() {


    setInterval(function() {
      let i = glacius.food;
      if (i==0) {clearInterval(); hungry();}

      else if (i > 0){ console.log('Currently at ' + (i));
      glacius.food-= 10;
      document.getElementById("tomodachi_status").innerHTML = "Fed and Happy :)"
    }
      
    }, 1000);

   }
  

   let fd = 0;
function hungry() {
  
  if (fd==0) { 
    // console.log("hungry");
    document.getElementById("tomodachi_status").innerHTML = "Hungry and annoyed";

    fd++;
    
  }


  else if (fd>0) {clearInterval()}
   
}


function resetHunger() 
{
  if (glacius.food>0) {
    fd=0;
  }
}
 

  



//
// setInterval(function() {
//   if (glacius.food==0) 
//   console.log("hungry") ;
//   clearInterval();
// }, 1000);

//

//   let button = document.querySelector('#button');
// button.addEventListener('mouseup', (e) => {
//   let log = document.querySelector('#log');
//   switch (e.button) {
//     case 0:
//       counter();
//       break;
//     case 1:
//       log.textContent = 'Middle button clicked.';
//       break;
//     case 2:
//       log.textContent = 'Right button clicked.';
//       break;
//     default:
//       log.textContent = `Unknown button code: ${e.button}`;
//   }
// });