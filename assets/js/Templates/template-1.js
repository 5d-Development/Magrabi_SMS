document.querySelector('#delivery-date')?.setAttribute('value', new Date().toISOString().split('T')[0]);

var slider = document.getElementById('age-range');
noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 99
    },
    tooltips: {
        to: function (numericValue) {
            return numericValue.toFixed(0);
        }
    },
    format: {
        to: function (value) {
            return value.toFixed();
        },
        from: function (value) {
            return value.replace(',-', '');
        }
    }
});

slider.noUiSlider.on('change.one', function () {
    console.log(slider.noUiSlider.get()[0] + ' - ' + slider.noUiSlider.get()[1]);
});

// Form Submit
function schedule_sms_1(form) {
    if (form.checkValidity()) {

    }

}

let form = document.querySelector('#schedule-sms-form-1');

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