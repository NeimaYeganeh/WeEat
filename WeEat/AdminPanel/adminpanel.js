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
        // wont allow you to create a new instance of the datatable
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
            $(row).addClass('clickableRow');
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

    let coordString = `(${pinData.lat} lat, ${pinData.long} long)`;
    addDataRowToContainer('Coordinates', coordString, container);
    
    addDeleteBtn(pinData, container);
    
    let pinInfoDiv = $('#pinInfoDiv');
    pinInfoDiv.css('border', '1px solid black');
    
//    border: 1px solid #FDCD65;
    pinInfoDiv.empty().append(container); // singleton?
}

addDataRowToContainer = (name, data, container) => {
    let div = document.createElement('div');
    div.innerHTML = `<p class="fieldName">${name}:</p><p class="fieldData">${data}</p>`;
    container.appendChild(div);
}

addDeleteBtn = (pinData, container) => {
    let btn = document.createElement('a');
    btn.id = 'deleteBtn';
    btn.innerHTML = 'Delete Pin';
    btn.onclick = () => {
        if (confirm(`Are you sure you want to delete the pin for '${pinData.title}' at ${pinData.time}?`)) {
            console.log('confirmed');
            
            let db = firebase.firestore();
            db.collection("Pins").doc(pinData.title).delete().then(() => {
                $('#pinInfoDiv').empty();
                pinInfoDiv.css('border', 'none');
            }).catch((error) => {
                console.error('Error removing document:', error);
            })
            
        } else {
            console.log('denied');
        }
    }
    
    let btnContainer = document.createElement('div');
    btnContainer.id = 'btnContainer';
    btnContainer.appendChild(btn);
    container.appendChild(btnContainer);
}




