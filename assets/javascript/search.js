$("#search").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();
      
    var term = $("#searchTerm").val();
    var records = $("#numRecords").val();
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + search + "&fq=" + filter+ "api-key=yourkey";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          $("#displayArticles").text(JSON.stringify(response));
        });
    

      
      });

    //   $(document).on("click", ".movie", displayMovieInfo);

     
    </script>