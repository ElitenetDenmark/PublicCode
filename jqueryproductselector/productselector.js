(function () {

 $(document).ready(function () {
  // SET AJAXFORMAT
  $.ajaxSetup({
   scriptCharset: "utf-8",
   contentType: "application/json; charset=utf-8"
  });

  // SERVICE FUNCTIONS
  function RemoveAllStartOver(param) {
   $(param + ' option').not('[data-headline]').remove();
  }

  // SELECT HEADLINE ON RELOAD
  $('*[id*=item]').each(function () {
   $(this).prop('selectedIndex', 0);
  });
  // RESET DISABLED
  $('#select-2,#select-3').prop("disabled", true);

  //POPULATE FIRST
  $.getJSON("json/_Brands.json", function (data) {
   $.each(data, function (key, val) {
    var o = new Option(val, key);
    $(o).html(val);
    $("#select-1").append(o);
   });
  });

  // CHANGE SELECT-1
  $('#select-1').change(function () {
   //REMOVE ALL START OVER
   RemoveAllStartOver("#select-2");
   RemoveAllStartOver("#select-3");
   $('#select-3').prop("disabled", true);


   $.getJSON("json/" + $(this).val() + ".json", function (data) {
    $.each(data, function (key, val) {
     var o = new Option(val, key);
     $(o).html(val);
     $("#select-2").append(o);
    });
    $('#select-2').prop("disabled", false);
   });
  });

  // CHANGE SELECT-2
  $('#select-2').change(function () {
   //REMOVE ALL START OVER
   RemoveAllStartOver("#select-3");

   $.getJSON("json/" + $(this).val() + ".json", function (data) {
    $.each(data, function (val, key) {
     var o = new Option(val, key);
     $(o).html(val);
     $("#select-3").append(o);
    });
    $('#select-3').prop("disabled", false);
   });
  });

  // EXE URL SELECT-3
  $('#select-3').change(function () {
   window.location = $(this).val();
  });
 });

}());