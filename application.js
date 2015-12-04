/*Created 2015-02-28  by RKS*/

$(document).ready(function(e){
    $('#newsletter_form').submit(function(e){
       e.preventDefault();
       if($('#agree_terms').prop('checked') == false){
            $('#agree_terms').focus();
            alert("Please agree to receieve newsletters from Shop Central.")
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
    
    $('#email_form').submit(function(e){
        e.preventDefault();
        data = {};
        data.send_to = "support@mobilefringe.com";
        data.subject = "Get in touch - Mobile Fringe form";
        data.body = {"email" : $('#yourEmail').val(), "name" : $('#yourName').val(), "message" : $('#yourMessage').val()};
        $.post('http://mobilefringe.mallmaverick.com/send_contact_email', data, function(data, textStatus, jqXHR){
            if(textStatus == "success"){
                $('#email_sent').fadeIn();
            }
            else{
                alert("Error sending email. Please try again later.");
            }
        });
    });
});

