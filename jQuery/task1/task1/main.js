// Inserting elements
// Start with a blank HTML page

// Using just JS (jQuery), create an image gallery
// All links to images in the gallery should be elements of the same array!

// When the gallery is created and visible on the page, create gallery title and insert it before the gallery images

// Go through gallery images and set a random size to each gallery image


$(function () {
    var links = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JhmBv3P27XKgA2MghP7zlSA2rH5ehi3BqjbCamaf8rk0JkAT', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCBYNb5nQXxJmGk_BOLYuOOo2Ijbe9DDj9AntiZstUhDIwDTJi_A', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwAp4hVYrt2Z1dxVEDxCi28QCn96YzWl--5sK236qKrG3ax-g'];

    links.forEach(function (imageSource, i) {
        var image = $('<img>').attr('src', links[i]).css('width', Math.floor(Math.random() * 500));
        $('body').append(image);

        // if (image.width <= 200) {
        //     image.addClass('greenBorder'); 
        // } else {
        //     break;
        // }
    })
    
    var h1 = $('<h1>').text('Naslov');
    $('body').prepend(h1);



})