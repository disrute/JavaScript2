
//When the cat reaches the middle of the screen, replace the img with an image of a cat dancing
//(use this URL: ), keep it dancing for 5 seconds, and then replace the img with the 
//original image and have it continue the walk.

// var run = setInterval(function catWalk() {
//   let img = document.getElementById('imgId');
//   img.style.left += '10px';
// }, 50);

const img = document.getElementById('imgId');
img.style.left = '0px';

let pos = 10;

function catWalk() {
  if (pos > window.innerWidth) {
    img.style.left = '0px';
    pos = 0;
  }
  if (pos === (window.innerWidth / 2)) {
    img.src = 'https://media.tenor.com/images/b413d00f7c04ec226e2ffda388d322ae/tenor.gif';
    setTimeout(function () {
      img.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      pos = pos + 10;
    }, 5000);
  }
  else {
    img.style.left = pos + 'px';
    pos = pos + 10;
    return pos;
  };
}
setInterval(catWalk, 50);