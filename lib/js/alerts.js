// Alerts
function centurionAlerts() {
  $('.btn-expand').on('click',function(){

    var obj = $(this),
        alBox = obj.parent().children('.alert-expand');

    if (obj.hasClass('open')){
      obj.removeClass('open');
      alBox.removeClass('expanded');
    } else {
      obj.addClass('open');
      alBox.addClass('expanded');
    }

  });
}
centurionAlerts();