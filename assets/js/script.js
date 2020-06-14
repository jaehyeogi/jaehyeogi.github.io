var Body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color
  },
  // document 객체. querySelector 객체에 속해 있는 함수 >> method
  // ,필수
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color
  },
  setH1Color: function (color) {
    var h1color = document.querySelector('h1')
    h1color.style.color = color
  },
}

var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll('a')
    var i = 7
    while (i < alist.length) {
      alist[i].style.color = color
      i = i + 1
    }
  },
}

function nightdayhandler(self) {
  var target = document.querySelector('body')
  var actionButton = document.getElementById('action')
  if (actionButton.style.background === 'url("assets/images/moon.png")') {
    Body.setBackgroundColor('black')
    Body.setColor('white')
    Body.setH1Color('white')
    Links.setColor('white')
    actionButton.style.background = "url('assets/images/sun.png')"
    target.classList.add('dark')
  } else {
    Body.setBackgroundColor('white')
    Body.setColor('black')
    Body.setH1Color('black')
    Links.setColor('black')
    actionButton.style.background = "url('assets/images/moon.png')"
    target.classList.remove('dark')
  }
}
