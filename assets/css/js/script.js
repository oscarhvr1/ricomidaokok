

var button = prompt("Ingrese su email", "")
alert("Bienvenido " + button);

$("#ingredientes").dblclick(function () {
   $(this).css({
       "color": "red",
   });
})




   var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
   var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
   })

   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
   })

   // jQuery
   $(document).ready(function () {
      $('#miscomidas').on('click', function () {
         $('#miscomidas').toggle('fast');

      });
   });

   $(document).ready(function () {
      $('#ingrediente').on('click', function () {
         $(this),css('color:"rojo');

      });
   });




