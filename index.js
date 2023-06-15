//Завдання 1

/*$(function () { 
   $(".head").css("background", "green");
   $(".inner").css("font-size", 35+"px");
})*/


//Завдання 2

/*$(function() {
   $('a[href^="https://"]').each(function() {
     $(this).attr("target", "_blank");
   });
 });*/

//Завдання 3

/*$(function () {
   $('h3 + div').each(function() {
      $(this).insertBefore($(this).prev('h3'));
   });
     });*/


     //Завдання 4 var1
   
     /*$(function () {
      $("[type='checkbox']").on("click", function () {
        let count = 0;
        $("input[type=checkbox]").each(function () {
          if (this.checked === true) count++;
        });
        if (count === 3) {
          $("[type='checkbox']").each(function () {
            if (this.checked === false) this.disabled = "disabled";
          });
        } else {
          $("[type='checkbox']").each(function () {
            if (this.checked === false) this.disabled = "";
          });
        }
      });
    });*/

     //Завдання 4 var2

    $(function () {
      $("[type='checkbox']").on("click", function () {
        let count = $("input[type='checkbox']:checked").length;
    
        $("[type='checkbox']").not(":checked").attr("disabled", count === 3);
    
      });
    });
    