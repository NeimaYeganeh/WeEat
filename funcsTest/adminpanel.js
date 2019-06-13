// adminpanel.js

// function getPins -> renderPinTable = 0 or refreshPinTable = 1
exports.getPins_t = function(table){
    if(table){return 0;}

    return 1;
}

// function createPinInfoSection -> addDataRowToContainer & addDeleteBtn
exports.createPinInfoSection_t = function(){
    addDataRowToContainer_t();
    return addDeleteBtn_t();
}

// function addDeleteBtn
exports.addDeleteBtn_t = function(){return 0;}


// function addDataRowToContainer
exports.addDataRowToContainer_t = function(){return 0;}

// function setRowListeners -> createPinInfoSection
exports.setRowListeners_t = function(a){return createPinInfoSection_t(a);}

// function refreshPinTable - > setRowListeners
exports.refreshPinTable_t = function(a){return setRowListeners_t(a);}

// function renderPinTable -> setRowListeners -> renderHTMLDataset
exports.renderPinTable_t = function(){
    renderHTMLDataset_t();
    return setRowListeners_t(a);
}
// function renderHTMLDataset
exports.renderHTMLDataset_t = function(){return 0;}
