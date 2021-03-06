var pos = 0, test,
    test_status,
    questions = [],
    choice, choices,
    correct = 0;

function renderQuestion(){
    test = document.getElementById('test');
    if(pos >= questions.length){
        test.innerHTML = "<h3>Ai raspuns corect la " + correct + " din " + questions.length + " intrebari </h3>";
        document.getElementById("test_status").innerHTML = "Sfarsitul Testului";
        pos = 0;
        correct = 0;
        return false;
    }

    var q = questions[pos];
    var question = q.question;

    test.innerHTML = "<h3>" + question + "</h3>";

    q.answers.forEach(function(ans, index) {
        test.innerHTML += "<input type='radio' name='choices' value='" + index + "'> " + ans + "<br>";
    });

    test.innerHTML += "<br>";

    test.innerHTML += "<button onclick='checkAnswer()'>Raspunde</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos].correct){
        correct++;
    }
    pos++;
    renderQuestion();
}

function reload() {
    window.location.reload();
}
document.getElementById('button').onclick= reload;

var loadUrl = './date/list-db.php';
if(window.location.search.indexOf('action=demo') !== -1) {
   loadUrl = 'date/question.json';
}

$.ajax(loadUrl, {
    dataType: 'json',
    data: {
        category: category
    }
}).done(function (response) {
    questions = response;
    // questions = JSON.parse(response);
    console.warn('response; ', response);
    renderQuestion();
});
