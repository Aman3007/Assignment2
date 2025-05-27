const box = document.getElementById("box");
const Displayreaction = document.getElementById("reaction-time");
const terminate= document.getElementById("stop");
const play= document.getElementById("start");

let startTime=0;

// Generating a random position within the screen
const randomPosition=()=> {
  const x = Math.floor(Math.random() * (innerWidth - 120));
  const y = Math.floor(Math.random() * (innerHeight - 120));
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

// Generating a random color
const getRandomColor=()=> {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Showing the box after some delay
const showBox=()=> {
  setTimeout(() => {
    randomPosition();
    box.style.display = "block";
    startTime = new Date().getTime();
  }, Math.random() * 2000 );
}


box.addEventListener("click",()=>{
  const endTime = new Date().getTime();
  const reactionTime = (endTime - startTime) / 1000; // in seconds
  Displayreaction.innerText = `Your reaction time: ${reactionTime} seconds`;

  // Change box color after click
  box.style.backgroundColor = getRandomColor();

  // Hide box and show again after delay
  box.style.display = "none";
  showBox();
}) 
  


terminate.addEventListener("click",()=>{
  Displayreaction.innerText = `Your reaction time: ${0} seconds`;
  box.style.display = "none";
})
play.addEventListener("click",()=>{
showBox();
})
// Start the game
showBox();
