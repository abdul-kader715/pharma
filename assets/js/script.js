(function ($) {

  "use strict";



  (function () {
    localStorage.removeItem('wpo_theme')

    window.onload = function () {


      // INITIALIZATION OF NAVBAR VERTICAL ASIDE
      // =======================================================
      new WPOSideNav('.js-navbar-vertical-aside').init()
    }
  })()

  /*-----------------------
    cart-plus-minus-button 
  -------------------------*/
  $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
  $(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $button.parent().find("input").val(newVal);
  });

})(window.jQuery);


$(document).ready(function () {
  $('select').niceSelect();
});

$(document).ready(function () {
  $('#myTable').DataTable({
    searching: false,
    language: {
      paginate: {
        next: '<i class="ti-angle-right">',
        previous: '<i class="ti-angle-left">'
      }
    }
  });
});

$(document).ready(function () {
  $('#brandTable').DataTable({
    searching: false,
    language: {
      paginate: {
        next: '<i class="ti-angle-right">',
        previous: '<i class="ti-angle-left">'
      }
    }
  });
});

$(document).ready(function () {
  $('#manage-categorieTable').DataTable({
    searching: false,
    language: {
      paginate: {
        next: '<i class="ti-angle-right">',
        previous: '<i class="ti-angle-left">'
      }
    }
  });
});

$(document).ready(function () {
  $('#manage-productTable').DataTable({
    searching: false,
    language: {
      paginate: {
        next: '<i class="ti-angle-right">',
        previous: '<i class="ti-angle-left">'
      }
    }
  });
});

$(document).ready(function () {
  $('#mang-typeTable').DataTable({
    searching: false,
    language: {
      paginate: {
        next: '<i class="ti-angle-right">',
        previous: '<i class="ti-angle-left">'
      }
    }
  });
});

$(function () {
  $('input[name="start-date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    timePicker: true,
    minYear: 1901,
  }, function (start, end, label) {
    var years = moment().diff(start, 'years');
    alert("You are " + years + " years old!");
  });
});

$(function () {
  $('input[name="end-date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    timePicker: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10)
  }, function (start, end, label) {
    var years = moment().diff(start, 'years');
    alert("You are " + years + " years old!");
  });
});

$(function () {
  $('input[name="pay-date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    timePicker: false,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10)
  }, function (start, end, label) {
    var years = moment().diff(start, 'years');
    alert("You are " + years + " years old!");
  });
});
$(function () {
  $('input[name="return-date"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    timePicker: false,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'), 10)
  }, function (start, end, label) {
    var years = moment().diff(start, 'years');
    alert("You are " + years + " years old!");
  });
});



$(function () {

  var start = moment().subtract(29, 'days');
  var end = moment();

  function cb(start, end) {
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  }

  $('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  }, cb);

  cb(start, end);

});



