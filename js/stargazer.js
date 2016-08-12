// requires "jsonp" datatype.

$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready
  $('#search').on('submit', function() {

    var name = $('#search-name').val();
    var api = 'http://www.strudel.org.uk/lookUP/json/?name=' + name;

    console.log(name);


    $.ajax({
        url: api,
        dataType: "jsonp",
        jsonpCallback: "logResults"

      })
      // .done(function(info) {
      //   console.log(info);
      // })
      .fail(function() {
        alert("error");
      });

    return false;
  })

});

function logResults(json) {
  // console.log(json);

  $('#preview').html('<img src="' + json.image.src + '">')

}
