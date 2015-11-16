/*Created 2015-02-28  by RKS*/

$('#newsletter_form').submit(function(e){
   e.preventDefault();
   if($('#agree_terms').prop('checked') == false){
        $('#agree_terms').focus();
        alert("Please agree to receieve newsletters from Shop Central")
   }
   else{
       $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function (data) {
                if (data.Status === 400) {
                    alert("Please try again later.");
                } else { // 200
                    $("#subscription_confirmed").fadeIn();
                }
        });
   }

});