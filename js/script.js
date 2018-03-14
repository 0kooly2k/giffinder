// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$(document).ready(function(){
    $.ajax({
        url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            var img = response.data[1].images.original.url;
            console.log(img);

            $('body').append('<img src=' + img + '>');

        },
    });
});
