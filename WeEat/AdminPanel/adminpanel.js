//var dt = require('datatables.net')();

$(document).ready(() => {
    getPins(true);
});

getPins = (isInit) => {
    let db = firebase.firestore();
    db.collection("Pins").onSnapshot((querySnapshot) => {
        let pins = [];
        querySnapshot.forEach((doc) => {
            let pin = doc.data();
            if (!pins.includes(pin)) {
                pins.push(pin);
            }
        });
        if (isInit) {
            renderPinTable(pins);
            isInit = false;
        }
        else {
            refreshPinTable(pins);
        }
    });
}

renderPinTable = (pins) => {
    console.log(pins);
    let datatable = $('#pinTable').DataTable({
        data: pins,
        lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 'All']],
        createdRow: (row, data, index) => {
            renderHTMLDataset($(row)[0], data);
        },
        columns: [
            {
                title: 'Title',
                data: 'title',
            },
            {
                title: 'Time',
                data: 'time',
                orderable: false,
            },
            {
                title: 'Sponsor',
                data: 'sponsor',
            },
        ],
    });
    setRowListeners();
}

renderHTMLDataset = (row, data) => {
    row.dataset.title = data.title || '';
    row.dataset.time = data.time || '';
    row.dataset.sponsor = data.sponsor || '';
    row.dataset.location = data.location || '';
    row.dataset.lat = data.coordinates[1] || '';
    row.dataset.long = data.coordinates[0] || '';
    row.dataset.contact = data.contact || '';
}

refreshPinTable = (pins) => {
    console.log(pins);
    let datatable = $('#pinTable').DataTable();
    datatable.clear().draw();
    datatable.rows.add(pins);
    datatable.columns.adjust().draw();
    setRowListeners();
}

setRowListeners = () => {
    $('#pinTable tbody').on('click', 'tr', (event) => {
        let rowData = event.currentTarget.dataset;
        createPinInfoSection(rowData);
    });
}

createPinInfoSection = (pinData) => {
    console.log(pinData);
//    let title = document.createElement('div');
//    let time = document.createElement('div');
//    let sponsor = document.createElement('div');
//    let location = document.createElement('div');
//    let lat = document.createElement('div');
//    let long = document.createElement('div');
//    let contact = document.createElement('div');
    
    let container = document.createElement('div');
    container.innerHTML = `${pinData.title} ${pinData.time} ${pinData.sponsor} ${pinData.location} ${pinData.lat} ${pinData.long} ${pinData.contact}`;
    
    let pinInfoDiv = $('#pinInfoDiv');
    
    pinInfoDiv.empty().append(container.outerHTML);
}



