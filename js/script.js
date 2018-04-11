// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$(document).ready(function() {
    $(".btn").click(function() {

        // get whatever is in the input field
        var search = $("#srch-term").val();
        console.log(search);

        // create the url that we want to send to giphy
        var url = "https://api.giphy.com/v1/stickers/search?q=" + search + "&api_key=dc6zaTOxFJmzC"
        console.log(url);
        // get the response back from giphy
        
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
                var img = response.data[1].images.original.url;
                console.log(img);

                $('body').append('<img src=' + img + '>');
            },
        });
        // $('body').append('<img src=' + img + '>');// render the image returns on the page


    });
});
