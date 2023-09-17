// Bootstrap Validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})();

// HTML input date default value
document.querySelectorAll('input[type=date]')?.forEach(element => {
    element.setAttribute('value', new Date().toISOString().split('T')[0]);
});

document.querySelectorAll('input[type=time]')?.forEach(element => {
    element.setAttribute('value', `${new Date().getHours()}:${String(new Date().getMinutes()).padStart(2, '0')}`)
});