
var lastScrollTop = 0;

window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = document.documentElement.scrollTop; 
   const scrol = document.getElementById('section2').offsetHeight;
   const fulheight = document.documentElement.scrollHeight - window.innerHeight;
const screen = window.scrollY;
   if (st > lastScrollTop) {
      console.log("scroll down");
      this.document.getElementById('fixed-div').style.display="none";
      if(screen === fulheight ){
        this.document.getElementById('fixed-div').style.display="block";
        this.document.getElementById('fixed-div').style.backgroundColor="black";
      }
   } else if (st < lastScrollTop) {
      console.log("scrol up");
      this.document.getElementById('fixed-div').style.display="block";
      this.document.getElementById('fixed-div').style.position="fixed";
      if(screen > scrol){
        this.document.getElementById('fixed-div').style.backgroundColor="black";
      }else if(screen < scrol){
        this.document.getElementById('fixed-div').style.background="none";
      }
   } 
   lastScrollTop = st <= 0 ? 0 : st;
}, false);