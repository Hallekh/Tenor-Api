/// key - AIzaSyA0saG2TDqrAnj6m9X2U7eTnQVb8o53o4I

var apikey = "AIzaSyA0saG2TDqrAnj6m9X2U7eTnQVb8o53o4I";
var clientkey = "my_test_app";
var lmt = 10;

$("#btn").click(function () {
    $("img").remove();

    var search = $("#search").val();
    

    var search_url = "https://tenor.googleapis.com/v2/search?q=" + search + "&key=" +
    apikey +"&client_key=" + clientkey +  "&limit=" + lmt;

    

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
          var myArr = JSON.parse(this.responseText)
          
          for(let i = 0; i < myArr["results"].length; i++){
            
            var myImg = myArr["results"][i]["media_formats"].gif.url;
            $("#result").append("<img src=" + myImg +">")
          }
        }
    }
    xmlHttp.open("GET", search_url);
    xmlHttp.send();
})


