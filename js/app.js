(() => {
  const ulboxes =  document.querySelector(".boxes");
  const boxes = document.querySelectorAll('.box');
  const playerO = document.getElementById("player1");
  const playerX = document.getElementById("player2");
  const board = document.getElementById("board");
  const finish = document.getElementById("finish");
  const win = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7],[1,4,7],[2,5,8],[3,6,9]];
  let plays = [[],[]];
  let isActivePlayerO;

  function startPlayer() {  
    if(Math.round(Math.random()))
      activeplayerX();
    else 
      activeplayerO();  
  }

  function togglePlayer() {
    if(isActivePlayerO) 
      activeplayerX();
    else
      activeplayerO();          
  }

  function play(e) {
    let box = e.target;
    let key = parseInt(box.getAttribute('data-key'));
    box.classList.remove("empty");  
     
    if(isActivePlayerO){
      box.classList.add("box-filled-1");
      plays[0].push(key);
    } else {
      box.classList.add("box-filled-2");
      plays[1].push(key);
    }    
    showinner();
  }

  function showinner() {
    let iswinner;
    if(isActivePlayerO) iswinner = winnerO();
    else iswinner = winnerX();

    if (!iswinner)  return;
    board.style.display="none";
    finish.style.display="";
  }

  function winnerO() {
    if(!arrayContainsArray(plays[0],win)) return false;  
    finish.classList.remove("screen-win-two");
    finish.classList.add("screen-win-one");
    document.querySelector('.message').textContent = "Player 1 wins !";
    return true;
  } 

  function winnerX() {
    if(!arrayContainsArray(plays[1],win)) return false;
    finish.classList.remove("screen-win-one");
    finish.classList.add("screen-win-two");
    document.querySelector('.message').textContent = "Player 2 wins !";
    return true;
  } 

  function activeplayerO() {
    playerX.classList.remove("active");
    ulboxes.classList.remove("boxes-hover-player2");
    playerO.classList.add("active");
    ulboxes.classList.add("boxes-hover-player1");  
    isActivePlayerO = true;  
  }
  
  function activeplayerX() {
    playerO.classList.remove("active");
    ulboxes.classList.remove("boxes-hover-player1");
    playerX.classList.add("active");
    ulboxes.classList.add("boxes-hover-player2");
    isActivePlayerO = false;
  }

  function arrayContainsArray(superset, subset) {
    let i = subset.length - 1;
    let result = false;    
    while(i >= 0 && !result){
      result = subset[i].every((arr) => superset.indexOf(arr) >= 0);
      i--;
    }
    return result;
  } 

  function startGame() {
    Array.from(boxes).forEach(box => {
      box.classList = "";
      box.classList.add('box', 'empty');
    });
    board.style.display="";
    plays = [[],[]];
  }

  Array.from(boxes).forEach(box => {
    box.addEventListener('click', function(e) {
      play(e);  
      togglePlayer();    
    });
  });

  document.querySelector("#start a").addEventListener("click", (e) => {
    document.getElementById("start").style.display="none";
    startGame();  
    setTimeout(() => startPlayer(), 100);
    e.preventDefault();
  });

  document.querySelector("#finish a").addEventListener("click", (e) => {
    finish.style.display="none";
    startPlayer();
    startGame();
    e.preventDefault();
  });

})();