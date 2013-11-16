
# Javascript for Site 


index = 1
duration = 2000

visableGallery = "#gallery1"
hiddenGallery  = "#gallery2"

imageNames = [
    'pyrenees',
    'pow',
    'lulu',
    'stelvia',
    'selkirks',
    'moreAlps',
    'jenni',
    'dolomites'
]

rotateImages = ->
    console.log("Rotate Image", index, visableGallery, hiddenGallery)

    index++
    if index >= imageNames.length
        index = 0

    newImageName = imageNames[index]

    $(hiddenGallery).attr("src", "images/#{newImageName}.png")

    console.log('hide', visableGallery)
    $(visableGallery).fadeOut(duration)
    console.log('show', hiddenGallery)
    $(hiddenGallery).fadeIn duration, ->
        temp = visableGallery
        visableGallery = hiddenGallery
        hiddenGallery = temp


images = []
for image in imageNames
    images.push $('<img />').attr('src', "images/#{image}.png")

$ ->
    $(hiddenGallery).fadeOut()
    setInterval(rotateImages, 10000)
