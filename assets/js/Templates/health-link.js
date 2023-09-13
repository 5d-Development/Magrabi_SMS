// HTML input date default value
document.querySelector('#delivery-date')?.setAttribute('value', new Date().toISOString().split('T')[0]);

// Range slider init
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
let form = document.querySelector('#schedule-sms-form-1');
form.addEventListener('submit', function (event) {
    if (form.checkValidity()) {
        event.preventDefault();
        for (let i = 0; i < 20; i++) {
            $('#table-body').append(`
                    <tr>
                        <td>John Doe ${i + 1}</td>
                        <td>${slider.noUiSlider.get()[0] + ' - ' + slider.noUiSlider.get()[1]}</td>
                        <td>+123456789</td>
                    </tr>`)
        }
        create_table();
    }
});

function create_table() {
    // Datatable
    $(document).ready(function () {
        var dt = $('#filtered-table').DataTable({
            select: {
                style: 'multi'
            },
            "language": {
                "paginate": {
                    "previous": "<i class='mdi mdi-chevron-left'>",
                    "next": "<i class='mdi mdi-chevron-right'>"
                }
            },
            "drawCallback": function () {
                $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
            }
        });

        // Delete selected rows
        let deleteButton = document.querySelector('#delete-rows');
        deleteButton.addEventListener('click', function () {
            var dt = $('#filtered-table').DataTable();
            dt.rows('.selected').remove().draw();
        });
    });

    document.querySelector('#submit-form-btn').setAttribute('disabled', true);
    document.querySelector('#result-table').classList.remove('d-none');
}