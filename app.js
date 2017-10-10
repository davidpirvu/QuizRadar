var pos = 0, test, test_status,
    questions = [],
    choice, choices,
    firstChoice, secondChoice,
    thirdChoice,
    correct = 0;

function renderQuestion(){
    test = document.getElementById('test');
    if(pos >= questions.length){
        test.innerHTML = "<h2>Ai raspuns la " + correct + " din " + questions.length + " intrebari corect</h2>";
        document.getElementById("test_status").innerHTML = "Sfarsitul Testului";
        pos = 0;
        correct = 0;
        return false;
    }

    var question = questions[pos].question;
    firstChoice = questions[pos].answers[1];
    secondChoice = questions[pos].answers[2];
    thirdChoice = questions[pos].answers[3];
    test.innerHTML = "<h3>" + question + "</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> " + firstChoice + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> " + secondChoice + "<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> " + thirdChoice + "<br><br>";
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

// $.ajax('./intrebari.json').done(function (response) {
$.ajax('./date/list-db.php').done(function (response) {
    questions = response;
    console.warn('response; ', JSON.parse(response))
    // window.addEventListener("load", renderQuestion, false);
    renderQuestion();
});
