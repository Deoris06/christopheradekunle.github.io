// alert("here")
(function(){
      emailjs.init("alxUeg3dPRCMNZVNU");
      AOS.init({
      	offset: 20,
      	duration: 1000
      });
})();
$('iframe').css('background', 'white');
$('iframe').contents().find('body').css('backgroundColor', 'white');

function sendEmail(full_name, email, phone, message){
	
	var full_name = $(".full_name").val();
	var email = $(".email").val();
	var phone = $(".phone").val();
	var message = $(".message").val();
	var params = {
		from_name: full_name,
		email_id: email,
		phone: phone,
		message:message
	}
	let isEmpty = Object.values(params);
	if(isEmpty[1].length !== 0 && isEmpty[3].length !== 0 && isEmpty[0].length !== 0){
		emailjs.send("service_63oqjzk", "template_t2y8ma7", params).then((response) => {
			if(response){
				Swal.fire({
				  position: 'center',
				  icon: 'success',
				  title: 'Your message has been sent!',
				  showConfirmButton: false,
				  timer: 1500
				})
			}
		}).catch((error) => {
			console.log("mail not sent", error)
		})

		

	}else{
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Please fill all the details in the form before you submit.',
		})
	}
	
}


$("#sending").on("click", function(e){
	e.preventDefault()
	// console.log('you')
	sendEmail();
})

var x = window.matchMedia("(max-width: 576px)")
// console.log(x)

function reduceSize(x){
  if(x.matches){
	$("textarea").attr("rows", "9")
   }
}
reduceSize(x);

$('#GetFile').on('click', function () {
    $.ajax({
        url: 'https://dl.dropboxusercontent.com/s/ym8uaugb77r32fu/Resume.pdf',
        method: 'GET',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = 'Resume.pdf';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    });
});

//get current year
let year = new Date();
let yearNow = year.getFullYear();
$(".presentyear").append(`${yearNow}. All right reserved. Made with <span class="text--tomato">&hearts;</span> Roundinc`)