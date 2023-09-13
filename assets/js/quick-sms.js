// Form Submit
let form = document.querySelector('#quick-sms-form');
form.addEventListener('submit', function (event) {
    if (form.checkValidity()) {
        event.preventDefault();
        Swal.fire({
            title: 'Form Submitted',
            type: 'success',
            confirmButtonClass: 'btn btn-confirm mt-2'
        }).then((result) => {
            // Submit action
            form.submit();
        })
    }
})