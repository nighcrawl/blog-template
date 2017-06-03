var replaceFormspreeEmail = function() {
	var emailLink = document.querySelector(".contact-form"),
		emailName = "ange.chierchia",
		emailTLD = "gmail.com",

	emailLink.setAttribute("action", "https://formspree.io/" + emailName + "@" + emailTLD);
};


document.addEventListener('DOMContentLoaded', function() {
	if (document.querySelector(".contact-form").length)
		replaceFormspreeEmail();
});

jQuery(document).ready(function($) {
	if ($(".contact-form").length) {
		$(".contact-form").submit(function(event) {
			event.preventDefault();
			$.ajax({
				url: $(this).attr('action'), 
				method: "POST",
				data: $(this).serialize(),
				dataType: "json"
			});
		});
	}
});