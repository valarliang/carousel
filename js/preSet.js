var imgsArr = [
  'https://valarliang.github.io/carousel/imagse/1.png',
  'https://valarliang.github.io/carousel/imagse/2.png',
  'https://valarliang.github.io/carousel/imagse/3.png',
  'https://valarliang.github.io/carousel/imagse/4.png',
  'https://valarliang.github.io/carousel/imagse/5.png',
  'https://valarliang.github.io/carousel/imagse/6.png',
  'https://valarliang.github.io/carousel/imagse/7.png',
  'https://valarliang.github.io/carousel/imagse/8.png',
  'https://valarliang.github.io/carousel/imagse/9.png',
  'https://valarliang.github.io/carousel/imagse/10.png',
  'https://valarliang.github.io/carousel/imagse/11.png',
  'https://valarliang.github.io/carousel/imagse/12.png',
  'https://valarliang.github.io/carousel/img/b0.jpg',
  'https://valarliang.github.io/carousel/img/b1.jpg',
  'https://valarliang.github.io/carousel/img/b2.jpg',
  'https://valarliang.github.io/carousel/img/b3.jpg',
  'https://valarliang.github.io/carousel/img/b4.jpg',
  'https://valarliang.github.io/carousel/img/b5.jpg',
  'https://valarliang.github.io/carousel/img/b6.jpg',
  'https://valarliang.github.io/carousel/img/b7.jpg',
  'https://valarliang.github.io/carousel/img/b8.jpg',
  'https://valarliang.github.io/carousel/img/0.jpg',
  'https://valarliang.github.io/carousel/img/1.jpg',
  'https://valarliang.github.io/carousel/img/2.jpg',
  'https://valarliang.github.io/carousel/img/3.jpg',
  'https://valarliang.github.io/carousel/img/4.jpg',
  'https://valarliang.github.io/carousel/img/5.jpg',
  'https://valarliang.github.io/carousel/img/6.jpg',
  'https://valarliang.github.io/carousel/img/7.jpg',
  'https://valarliang.github.io/carousel/img/8.jpg',
  'https://valarliang.github.io/carousel/img/9.jpg',
  'https://valarliang.github.io/carousel/img/10.jpg',
  'https://valarliang.github.io/carousel/img/11.jpg',
  'https://valarliang.github.io/carousel/imagse/bgff.png',
  'https://valarliang.github.io/carousel/imagse/1_end.png',
  'https://valarliang.github.io/carousel/imagse/2_end.png',
  'https://valarliang.github.io/carousel/imagse/3_end.png',
  'https://valarliang.github.io/carousel/imagse/4_end.png',
  'https://valarliang.github.io/carousel/imagse/5_end.png',
  'https://valarliang.github.io/carousel/imagse/6_end.png',
  'https://valarliang.github.io/carousel/imagse/7_end.png',
  'https://valarliang.github.io/carousel/imagse/8_end.png',
  'https://valarliang.github.io/carousel/imagse/9_end.png',
];
var imgWrap = [];
window.onload = function () {
  for(var i =0; i < imgsArr.length ;i++) {
    imgWrap[i] = new Image();
    imgWrap[i].src = imgsArr[i];
  }
}

// prevent-zoom
var isFirefox=/Firefox/i.test(navigator.userAgent)?true:false;
var unMouseBtn=function(e){
  var e = e || window.event;
  if(e.wheelDelta && e.ctrlKey){//IE/Opera/Chrome e.wheelDelta±120
     e.preventDefault?e.preventDefault():e.returnValue=false;
  }else if(e.detail && e.ctrlKey){//Firefox e.detail±3
     e.preventDefault?e.preventDefault():e.returnValue=false;
  }
};
var mousewheelevt=isFirefox?"DOMMouseScroll":"mousewheel";
if(document.attachEvent){//IE/Opera/Chrome
  document.attachEvent("on"+mousewheelevt,unMouseBtn);
}else if(document.addEventListener){//Firefox
  document.addEventListener(mousewheelevt,unMouseBtn,false);
}
var unCtrl=function(e){
  var e = e || window.event;
  var isFirefox=(/Firefox/i.test(navigator.userAgent))?true:false;
  var code=isFirefox?"109,107,173,61":"109,107,189,187";
  if(e.ctrlKey && code.indexOf(e.keyCode)!=-1){
     e.preventDefault?e.preventDefault():e.returnValue=false;
  }
};
document.onkeydown=unCtrl;
