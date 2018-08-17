 jQuery("body").find('.form-autocomplete').on('autocompleteclose', function(event, node) {
  var val = jQuery(this).val();
  var match = val.match(/\((.*?)\)$/);
  if (match) {
    jQuery(this).data('real-value', val);
    jQuery(this).val(val.replace(' ' + match[0], ''));
  }
});