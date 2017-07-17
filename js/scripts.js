//Business Logic
function info(task,date, notes) {
  this.task = task;
  this.date = date;
  this.notes = notes;
}

info.prototype.taskList = function() {
  return this.task + ' must be done by: ' + this.date;
}

//User Interface
$(document).ready(function() {
  $('#inputs').submit(function(event) {
    event.preventDefault();
    var task = $('#toDoList').val();
    var dates = $('#date').val();
    var notes = $('#note').val();
    var newInfo  = new info(task,dates,notes);

    $('#outputs').append('<li><input type="checkbox" name="addList" value="addList">' + " " + newInfo.taskList() + '<p><span class= "notes">See notes</span></p><p><span id="noteContent"></span></p></li>');



    $('.notes').last().click(function() {
      $('.notes').append(newInfo.notes);
    });

    $('.form-control').val('');
  });

  $('#remove').click(function(event) {
    event.preventDefault();
    $('input:checkbox[name=addList]:checked').parent().remove();
  });
});
