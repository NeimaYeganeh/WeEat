//var dt = require('datatables.net')();

$(document).ready(() => {
    renderPinTable();
});

renderPinTable = () => {
    let pins = [
        {
            num: 132,
            name: 'Neim',
        },
        {
            num: 34,
            name: 'Nat',
        },
        {
            num: 20,
            name: 'Asher',
        },
        {
            num: 4,
            name: 'Larkin',
        },
        {
            num: 1234,
            name: 'Yeg',
        },
        {
            num: 4321,
            name: 'Megan',
        },
    ];
    let format = '<"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-tl ui-corner-tr"lfr>'
                + 't'
                + '<"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix ui-corner-bl ui-corner-br"ip>';

    let datatable = $('#pinTable').DataTable({
        data: pins,
        format: format,
        lengthMenu: [[5, 10, -1], [5,10,'All']],
        columns: [
            {
                title: 'Number',
                data: 'num',
//                render: (a,b,c) => {
//                    console.log(a,b,c);
//                    return c;
//                }
            },
            {
                title: 'Name',
                data: 'name',
            },
        ],
    });

    datatable.draw();
    datatable.on('draw', () => {
        console.log('drawing!!');
    });
    console.log(pins, datatable);
}
