function getRow(continut) {
    var id = continut.id;                        // validare variabila (valoarea ei)
    var question = continut.question || '';      // validare variabila (valoarea ei sau nimic)
    var answers = continut.answers || '';    // validare variabila (valoarea ei sau nimic)
    var correct = continut.correct || '';            // validare variabila (valoarea ei sau nimic)
    var category = continut.category || '';    // validare variabila (valoarea ei sau nimic)
    var row = '<tr><td>' + question + '</td><td>' + answers + '</td><td>' + correct + '</td><td>' + category + '</td>' +
        '<td class="actions">' +
        '<span><a href="date/remove-db.php?id=' + id + '">&#9986;</a></span> ' +
        '<span><a href="#" class="edit" data-id="' + id + '">&#x270E;</a></span>' +
        '</td>' +
        '</tr>';
    return row;
}

var tableContent = '';                              // creez o variabila goala in care voi pune cotinut

function createRow(question) {
    tableContent += getRow(question);                // adaug in tableContent continutul rezultat din functia getRow
}

$.ajax('date/edit-list.php', {                            // aduce date din fisier continut2.json
    cache: false,
    dataType: 'json'
}).done(function (questions) {                       // ajax face un request
    console.debug('continut loaded', questions);     // stochez datele in variabila continut2
    questions.forEach(createRow);// se creaza un string din variabila continut2, in care am stocat datele venite de pe server

    $("#question-list tbody").html(tableContent);   // generare HTML (selector jQuery cu # si continui cu sintaxa jQuery[html]. Pentru ca trasnmit [table content] stie ca trebuie sa imi schimbe ceva )

    //paragraful de mai jos(cu rol de editare) vine amplasat aici dupa ce am generat html-ul/linkurile. Creez apoi accesez ce am creat.
    $('#question-list a.edit').click(function () {  // cu JS prind click. Caut titlul de tabel, sa fie link si clasa remove
        var id = $(this).data('id');                // this este convertit la un selector cu obiect jquery prin $ ca sa pot lua id-ul din this
        var continut = questions.find(function (c) { // caut un continut dintre toate continut2le care contine id-ul meu
            return c.id == id;                    // se ia ID-ul
        })
        console.debug('edit', id, continut, this);

        $('input[name=id]').val(continut.id);                // cu aceste valori luate din json populez forma de sus pentru a fi editabil
        $('input[name=question]').val(continut.question);    // cu aceste valori luate din json populez forma de sus pentru a fi editabil
        $('input[name=answers]').val(continut.answers);     // cu aceste valori luate din json populez forma de sus pentru a fi editabil
        $('input[name=correct]').val(continut.correct);    // cu aceste valori luate din json populez forma de sus pentru a fi editabil
        $('input[name=category]').val(continut.category);    // cu aceste valori luate din json populez forma de sus pentru a fi editabil
    });

});

