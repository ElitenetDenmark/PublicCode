
(function ($) {
 "use strict";
 $(document).ready(function () {
  $('*[id*=item]').each(function () {
   $(this).prop('selectedIndex', 0);
  });

  hideOptions("#item-2");
  hideOptions("#item-3");

  $('#item-1').change(function () {
   hideOptions("#item-2");
   zeroSelected("#item-2");
   $('option[data-parent-item="' + $(this).val() + '"]').removeAttr('hidden');
  });

  $('#item-2').change(function () {
   hideOptions("#item-3");
   zeroSelected("#item-3");
   $('option[data-parent-itemsub="' + $(this).val() + '"]').removeAttr('hidden');
  });

  $('#item-3').change(function () {
   window.location = $(this).val();
  });

  function hideOptions(param) {
   $(param).find("option").attr('hidden', 'hidden');
  }

  function zeroSelected(param) {
   $(param).prop('selectedIndex', 0);
  }

 });
}(jQuery));