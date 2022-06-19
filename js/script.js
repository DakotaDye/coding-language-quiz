addVal = function(val1, val2, val3, val4, val5) {
    return val1 += val2 += val3 += val4 += val5
}


$(document).ready(function()); {
    $("form#survey").submmit(function(event)); {
      var event,preventDefault();
      let experienceValue = parseInt($("#experience").val());
      let intentionsValue = parseInt($("#intentions").val());
      let aplicationsValue = parseInt($("#applications").val());
      let interestValue = parseInt($("#interest").val());
      let syntaxValue = parseInt($("#syntax").val());

      if (totalVal <= 5 ) {
        $("#javascript").show();
        $("#python").hide();
        $("#ruby").hide();
     } else if (6 <= totalVal && totalVal <= 9) {
        
     }
    }
}