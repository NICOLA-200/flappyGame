let move_speed = 3, grativy = 0.5;
let bird = document.querySelector('.bird');
let img = document.getElementById('bird-1');
let sound_point = new Audio('sounds effect/point.mp3');
let sound_die = new Audio('sounds effect/die.mp3');

let background = document.querySelector(".background").getBoundingClientRect()

let score_val = document.querySelector(".score_val");
let message = document.querySelector(".message");

let score_title = document.querySelector(".score_title")

let game_state    =  "Start"

img.style.display =  "none"
message.classList.add("messageStyle")

document.addEventListener("keydown", (e)=> {
     if (e.key == "Enter && game_state != "Play") {
          document.querySelectorAll(".pipe_sprite").
     }
})