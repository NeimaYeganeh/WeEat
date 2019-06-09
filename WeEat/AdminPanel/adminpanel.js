//var dt = require('datatables.net')();

$(document).ready(() => {
    //Hides Admin Panel if not logged in and redirects user to homepage
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user)
        {   
            document.getElementsByTagName("body")[0].style.display = "none";
            alert("You do not have permission to view this page. Login to continue.");
            window.location = '../index.html';
        }
    });
    getPins(true);
    
    $('#logoutBtn').on('click', () => {
        firebase.auth().signOut();
    })
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
            $(row).addClass('clickableRow')
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
    let container = document.createElement('div');
    
    addDataRowToContainer('Title', pinData.title, container);
    addDataRowToContainer('Time', pinData.time, container);
    addDataRowToContainer('Location', pinData.location, container);
    addDataRowToContainer('Sponsor', pinData.sponsor, container);
    addDataRowToContainer('Contact', pinData.contact, container);
    let coordString = `(${pinData.long}, ${pinData.lat})`;
    addDataRowToContainer('Coordinates', coordString, container);
    
    let pinInfoDiv = $('#pinInfoDiv');
    pinInfoDiv.empty().append(container.outerHTML);
}

addDataRowToContainer = (name, data, container) => {
    let div = document.createElement('div');
//    div.innerHTML = `<b>${name}:</b><br/>&nbsp${data}`;
    div.innerHTML = `<p class="fieldName">${name}:</p><p class="fieldData">${data}</p>`;
    container.appendChild(div);
}




