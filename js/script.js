var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
    //     $('body').css('color',color);
  },
    // document 객체. querySelector 객체에 속해 있는 함수 >> method
  // ,필수
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor = color;
    //     $('body').css('backgroundColor',color);
  },
  H3Color:function(color){
    document.querySelector('h3').style.color = color;
//     $('body').css('color',color);
  }
}
var Links = {
setColor:function(color){
  var alist = document.querySelectorAll('a');
  var i = 0;
  while( i < alist.length){
  alist[i].style.color = color;
  i = i + 1;
   }
  //    $('a').css('color',color);
}
}
function nightdayhandler(self){
  var target = document.querySelector('body');
  var actionButton = document.getElementById('action');
  if(actionButton.style.background === 'url("photos/moon.png")'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  Body.H3Color('white');
  Links.setColor('white');
  actionButton.style.background = "url('photos/sun.png')";
 }
 else{
   Body.setBackgroundColor('white');
   Body.setColor('black');
   Body.H3Color('black');
   Links.setColor('black');
   actionButton.style.background = "url('photos/moon.png')";
     }
}

