
$(document).ready(function () {
	//Put your code here
  var pictures = [
    'images/gallery/bridge.JPG',
    'images/gallery/class.jpg',
    'images/gallery/nepal-landscape.jpg',
    'images/gallery/plaque.JPG',
    'images/gallery/school-crowd.JPG',
    'images/gallery/shelter.jpg',
    'images/gallery/prayerflags.jpg',
    'images/gallery/kidsontree.jpg',
    'images/gallery/b&w_kids.jpg',
    'images/gallery/women.jpg',
    'images/gallery/band.jpg',
    'images/gallery/festival.jpg'


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
