function getrow(contact) {
    // if(phone==undefined){
    //     phone = '';
    // }
    // if(typeof lastName == "undefined") {
    //     lastName='';
    // }
    var firstName = contact.firstName || '';
    var lastName= contact.lastName || '';
    var phone= contact.phone || '';
    var id=contact.id;

    var row = '<tr>' +
             '<td>' + firstName + '</td>' +
             '<td>' + lastName + '</td>' +
            '<td>' + phone + '</td>' +
            '<td class="action">' +
                '<span><a href="date/remove.html?id='+id+'"> x </a></span> ' +
                '<span><a href="x">edit</a></span>' +
            '</td>'+
        '</tr>';

    return row;
}

var contacte = [];

var person ={
    lastName: "Matei",
    firstName: "Nicoleta",
    age: 7,
    married: true,
    skills: ["html", "css", "js"],
    voiceCall: function (nume) {
        console.info('te rog sa suni pe', nume)
    }

};

console.info(person.firstName);
person.voiceCall("Soacra");

var tableContent = '';

//for (var i = 0; i < contacte.length; i++) {
//      createRow(contacte[i]);
//}

function createRow(contact) {
    tableContent +=getrow(contact);
}


$.ajax('date/contacte.json', {
    dataType: 'json',
    cache: false
}).done(function (contacte) {
    console.info("raspuns", contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html (tableContent);
});

console.info('')




//1. convert from array of arrays into json
//2. load contacts from json file with ajax
//3. remove contact (ui)
//4. edit contact (UI)


