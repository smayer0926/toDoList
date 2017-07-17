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

    $('#outputs').append(' <li><input type="checkbox" name="addList" value="addList"> ' + " " + newInfo.taskList() + '<h5><span class= "notes">See notes</span></h5><p><span id="noteContent">' + newInfo.notes + '</span></p></li>');



    $('.notes').last().click(function() {
      $('#noteContent').toggle();
    });

    $('.form-control').val('');
  });

  $('#didIt').click(function(event) {
    event.preventDefault();
    $('input:checkbox[name=addList]:checked').parent().remove();
  });
});
