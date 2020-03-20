// JVbQ8C2j4EcYyHgynfLYCI0jBAjAADk2

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=JVbQ8C2j4EcYyHgynfLYCI0jBAjAADk2";

var search = $("#searchTerm");
var start = $("#startYear");
var end = $("#endYear");

var param = "&q=corona virus&limit=10&end_date=20200310";
var final = queryUrl + param;

//Remind Com to change the id to match
$("#searchBtn").click(function () {
    var searchValue = "&q=" + search.val();
    console.log(searchValue);
    var stardate;
    var endDate;

    if (start.val() === "")
    {
        stardate = "";
    }
    else
    {
    startDate = "&start_date=" + start.val() + "0101";
    console.log(startDate);
    }

    if (end.val() === "")
    {
        endDate = ""
    }
    else
    {
    endDate = "&end_date="  + end.val() + "1231";
    console.log(endDate);
    }

    param = searchValue + startDate + endDate

    $.ajax({
        url: final,
        method: "GET"
      })
        .then(function(response) {
          var results = response;
          console.log(results);
        
        })
    
    
    
});



