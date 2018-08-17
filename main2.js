jQuery("body").find('.form-autocomplete').change(function() {
            var val = jQuery(this).val();
            var match = val.match(/\((.*?)\)$/);
            if (match) {
                jQuery(this).data('real-value', val);
                jQuery(this).val(val.replace(' ' + match[0], ''));
            }
        });   