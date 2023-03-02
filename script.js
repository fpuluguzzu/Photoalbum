$(function () {
    var $feedbackForm = $("#feedback");
    if ($feedbackForm.length) {
        $feedbackForm.validate({
            rules: {
                username: {
                  required: true
                },
                image: {
                    required: true
                  }, 
                  comment: {
                    required: true
                  }, 

            },
            
            messages:{
                username:{
                    required: ' must be at least 6 characters!'
                },
                image:{
                    required: ' cannot be empty!'
                },
                comment:{
                    required: ' cannot be empty!'
                },
            }
        })
    }
})





