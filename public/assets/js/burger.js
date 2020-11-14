
$(function() {
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    var fresh = true;

    var eatenState = {
      eaten: fresh
    };

    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: eatenState
    }).then(
      function() {
  
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      name: $("#newBurger").val()
    };

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });
});