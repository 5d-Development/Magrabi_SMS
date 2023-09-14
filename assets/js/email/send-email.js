// Send email
let form = document.querySelector('#send-email-form');


form.addEventListener('submit', function (event) {
  if (form.checkValidity()) {
    event.preventDefault();
    let to = document.querySelector('#to').value;
    let subject = document.querySelector('#subject').value;
    let email_content = document.querySelector('#email-content').value;
    console.log(to);
    console.log(subject);
    console.log(email_content);
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "mohamed.saber@5d-agency.com",
      Password: "B50EB0AB721B40F88473BB5267B844594077",
      To: `${to}`,
      From: "mohamed.saber@5d-agency.com",
      Subject: `${subject}`,
      Body: `${email_content}`
    }).then(
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Email Sent Successfully...',
      })
    );
  }
});