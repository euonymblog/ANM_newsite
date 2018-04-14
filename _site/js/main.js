
$(document).ready(function () {
	//Put your code here
  var pictures = [
    'images/gallery/b&w_kids.jpg',
    'images/gallery/badges.jpg',
    'images/gallery/bags.jpg',
    'images/gallery/band.jpg',
    'images/gallery/banner.jpg',
    'images/gallery/bridge.JPG',
    'images/gallery/CadetTrek.JPG',
    'images/gallery/class.jpg',
    'images/gallery/festival.jpg',
    'images/gallery/flags.jpg',
    'images/gallery/kidsontree.jpg',
    'images/gallery/nepal-landscape.jpg',
    'images/gallery/plaque.JPG',
    'images/gallery/roy.jpg',
    'images/gallery/school-crowd.JPG',
    'images/gallery/school-pic.JPG',
    'images/gallery/shelter.JPG',
    'images/gallery/women.jpg'


  ];


  function randomNumber(min, max) {
    return (Math.floor(Math.random() * max) + min);
  }

  function RandomPic () {
    return "url(" + pictures[randomNumber(1, pictures.length) - 1] + ")";
  }

    for(var i=0; i <= 4; i++) {
      $(".gallery"+i).css("background-image", RandomPic())
    }

});
