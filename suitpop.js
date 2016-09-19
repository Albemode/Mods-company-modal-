var timeoutId = null;

window.addEventListener("load",function(){

  timeoutId = setTimeout(modalOpen,3000);
  
  document.querySelector("#popup .close").addEventListener("click",modalClose);

  
  document.getElementById("launch").addEventListener("click",function(){
      
      if( timeoutId ) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      modalOpen();
    });
});

function modalOpen() {
  document.getElementById("cover").style.display = "block";
  document.getElementById("popup").style.display = "block";
  setTimeout(function(){
    document.getElementById("cover").style.opacity = 1;
    document.getElementById("popup").style.opacity = 1;
  },1); 
}
function modalClose() {
  document.getElementById("cover").style.opacity = 0;
  document.getElementById("popup").style.opacity = 0;
  setTimeout(function(){
    document.getElementById("cover").style.display = "none";
    document.getElementById("popup").style.display = "none";
  },1000); // match the css 1s transition
}