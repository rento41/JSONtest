
$(document).ready(function() {

    $('#etsySearch').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val();
        var searchNumber = $('#query2').val();
        getRequest(searchTerm,searchNumber);
    });
    
    function getRequest(searchTerm,searchNumber){
       
        $.ajax({
            dataType: 'jsonp',
            kolicina: searchNumber,
            url : 'https://openapi.etsy.com/v2/listings/active.js?keywords=' + searchTerm + '&limit=' + searchNumber + '&includes=Images:1&api_key=gm8hkqlwavvup5paouv4vdu5',
            success: function(data){
                showResults(data);
            }
       });
    }
    
    function showResults(data){
        var value = "";
        $.each(data.results, function(index, item){  
            console.log(data);
            if(index == 0){
                $('#slajder').html('<div class="item active"><a href="' + item.url + '"><img src="' + item.Images[0].url_fullxfull + '" clas="img-responsive"/></a></div>')
            }
            else{
                $('#slajder').append('<div class="item"><a href="' + item.url + '"><img src="' + item.Images[0].url_fullxfull + '" clas="img-responsive"/></a></div>')
            }
        });
    }
});

