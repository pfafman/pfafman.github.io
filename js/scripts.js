var duration, hiddenGallery, image, imageNames, images, index, rotateImages, visableGallery, _i, _len;

index = 1;

duration = 2000;

visableGallery = "#gallery1";

hiddenGallery = "#gallery2";

imageNames = ['pyrenees', 'pow', 'lulu', 'stelvia', 'selkirks', 'moreAlps', 'jenni', 'dolomites'];

rotateImages = function() {
  var newImageName;
  console.log("Rotate Image", index, visableGallery, hiddenGallery);
  index++;
  if (index >= imageNames.length) {
    index = 0;
  }
  newImageName = imageNames[index];
  $(hiddenGallery).attr("src", "images/" + newImageName + ".png");
  console.log('hide', visableGallery);
  $(visableGallery).fadeOut(duration);
  console.log('show', hiddenGallery);
  return $(hiddenGallery).fadeIn(duration, function() {
    var temp;
    temp = visableGallery;
    visableGallery = hiddenGallery;
    return hiddenGallery = temp;
  });
};

images = [];

for (_i = 0, _len = imageNames.length; _i < _len; _i++) {
  image = imageNames[_i];
  images.push($('<img />').attr('src', "images/" + image + ".png"));
}

$(function() {
  $(hiddenGallery).fadeOut();
  return setInterval(rotateImages, 10000);
});
