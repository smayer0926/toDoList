//Business Logic

//User Interface
$(document).ready(function() {
  $('#inputs').submit(function(event) {
    event.preventDefault();
    var addList = $('#toDoList').val();

    $('#outputs').append('<li><input type="checkbox" name="addList" value="addList">' + addList);

    $('.form-control').val('');
  });

  $('#remove').click(function(event) {
    event.preventDefault();
    $('input:checkbox[name=addList]:checked').parent().remove();
  });
});
