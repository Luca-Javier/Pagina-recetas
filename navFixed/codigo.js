const nav = document.querySelector(".miNav");

/* function update(distanceTop){
  distanceTop = newDistance;
  console.log("update");
  return newDistance;
} */

/* function medir(){} */

/* console.log("mido"); */
window.addEventListener("scroll", ()=>{
  if(window.scrollY >= 100){
    console.log(window.scrollY);
    nav.setAttribute("style","position: fixed; top:0px;");
    /* no se porque no anda el nav.style */
  }else if(window.scrollY <= 100){
    nav.setAttribute("style","");
    console.log(window.scrollY);
  }
  

});

/* window.addEventListener("scroll",()=>{
  console.log("1")
}) */ /* anda */
