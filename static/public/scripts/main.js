$('#note-form').submit(function (e) {
  e.preventDefault();

  var form = {
    url: $(this).attr('action'),
    type: $(this).attr('method')
  };

  $.ajax({
    url: form.url,
    type: form.type,
    data: $(this).serialize(),
    success: function (result) {
      $.modal.close();

      if (form.type === 'POST') {
        $('.notes-list').prepend(result);
      } else if (form.type === 'PUT') {
        $('.note-content').html(result);
      }

    }
  });
});
