document.querySelector('#send-email-btn').addEventListener('click', function() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "mohamed.saber@5d-agency.com",
        Password : "2A0805433C20F55892B4186E2A785238B65E",
        To : 'mohamed.saber@5d-agency.com',
        From : "mohamed.saber@5d-agency.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})