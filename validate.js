$(document).ready(function(){
    
         $("#submit-form").validate({
        
            rules:{
                company_name:{
                    required:true,
                    minlength:4
                },
                contact_number:{
                    required:true,
                    minlength:10,
                },
                designation:{
                    required:true,
                    minlength:2
                }
            },
            messages:{
                company_name:{
                    required:"field required",
                    minlength:"enter 4 char"
                }
            }
        })
    
})
