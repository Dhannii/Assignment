$(document).ready(function () {
    $("#toggleSwitch").change(function () {
      if (this.checked) {
        // Monthly pricing is selected
        $("#monthlyPricing").hide();
        $("#yearlyPricing").show();
      } else {
        // Yearly pricing is selected
        $("#monthlyPricing").show();
        $("#yearlyPricing").hide();
      }
    });
  });