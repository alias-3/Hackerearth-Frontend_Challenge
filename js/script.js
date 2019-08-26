$(function() {
    $("form").submit(function(e) {
        e.preventDefault();
        var t = $("#searchbox").val();
        $.ajax({
            url: "http://starlord.hackerearth.com/books",
            jsonp: "callback",
            dataType: "json",
        }).done(function(data) {
            if(data !== null && typeof(data) !== 'object') {
                data = JSON.parse(data);
                console.log(data);
            }  
        });

    })
})


// function search(e) {        
    
//     $('#search-results').html(' ');
//     $('#nav-buttons').html(' ');     
    
//     $.getJSON("http://starlord.hackerearth.com/books", function(data) {
//     console.log(data);
//     });
// }

///could not complete the API request because of the error:
/* Access to XMLHttpRequest at 'http://starlord.hackerearth.com/books' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. */