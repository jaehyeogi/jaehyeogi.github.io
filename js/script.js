var Links = {
  setColor:function(color){
   // var target = document.querySelectorAll('a');
   // var i =6;
   // while(target.length){
   //   target[i].style.color = color;
   //   i = i + 1;
   //     }
   $('a').css('color',color);
    }
  }
var Body = {
  setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
},
  H3Color:function(color){
    // document.querySelector('h3').style.color = color;
    $('body').css('color',color);
  }
}
function nighthandler(){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  Body.H3Color('white');
  Links.setColor('white');
        }
function dayhandler(){
  Body.setBackgroundColor('white');
  Body.setColor('black') ;
  Body.H3Color('black');
  Links.setColor('black');
}
