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
    
    $('#toggle_menu').click(function(){
        $(this).toggleClass("fa-chevron-down fa-chevron-up");
        if ($('.mobile_menu').hasClass("open")){
            $('.mobile_menu').slideUp();    
            $('.mobile_menu').removeClass("open");
        }
        else{
            $('.mobile_menu').slideDown();
            $('.mobile_menu').addClass("open");
        }
        
    })
    awesomeness();
    
    $('#contact_form').submit(function(e){
        e.preventDefault();
        data = {};
        data.send_to = "shopcentral@mobilefringe.com";
        data.subject = "Get in touch - Shop Central";
        var message = $('#message').val();
        data.body = {"Email" : $('#email').val(), "Name" : $('#name').val(), "Feedback type: ": $('#feeback_type').val(), "Message" : message};
        $.post('http://mobilefringe.mallmaverick.com/send_contact_email', data, function(data, textStatus, jqXHR){
            if(textStatus == "success"){
                $('#email_sent').fadeIn();
                $('#contact_form').trigger('reset');
            }
            else{
                alert("Error sending email. Please try again later.");
            }
        });
    });
    
    
});


    
    function awesomeness(){
    $(window).scroll(function(){
        if($(document).scrollTop() >= $('.how_it_works').position().top ){
            $('.image_cover').css("top", "166px");
            $('.image_cover').addClass("fixed_image");
            $('.main_heading').addClass("fixed_image");'
            
        } 
        else{
            $('.image_cover').removeClass("fixed_image");
        }
    });
}



