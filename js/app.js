(() => {
  const ulboxes =  document.querySelector(".boxes");
  const player1 = document.getElementById("player1");
  const player2 = document.getElementById("player2");

  function startPlayer() {  
    if(Math.round(Math.random()))
      activeplayer2();
    else 
      activeplayer1();
  }

  function togglePlayer() {
    if(player1.classList.contains("active"))
      activeplayer2();
    else
      activeplayer1();      
  }

  function activeplayer1() {
    player2.classList.remove("active");
    ulboxes.classList.remove("boxes-hover-player2");
    player1.classList.add("active");
    ulboxes.classList.add("boxes-hover-player1");
  }

  function activeplayer2() {
    player1.classList.remove("active");
    ulboxes.classList.remove("boxes-hover-player1");
    player2.classList.add("active");
    ulboxes.classList.add("boxes-hover-player2");
  }
  
  const boxes = document.querySelectorAll('.box');
  Array.from(boxes).forEach(box => {
    box.addEventListener('click', function(e) {
      togglePlayer();  
    });
  });

  document.querySelector("#start a").addEventListener("click", (e) => {
    document.getElementById("start").style.display="none";
    document.getElementById("board").style.display="";
    setTimeout(() => startPlayer(), 100);
    e.preventDefault();
  });

})();