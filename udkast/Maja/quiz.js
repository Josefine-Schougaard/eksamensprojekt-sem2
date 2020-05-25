function startQuiz() {
    document.getElementById("btn").style.visibility = "hidden";
    return displayQuestion();
  }
  
  var pos = 0,
    test2,
    test_staus,
    question,
    option,
    options,
    opA,
    opB,
    opC,
    opD,
    score = 0;
  var questions2 = [
    [
      " Hvem var rektor på Hogwarts lige før Dumbledore?",
      " Armando Dippet.",
      " Phineas Nigellus Black.",
      " Quintin Trimble.",
      " Heliotrope Wilkins.",
      "A"
    ],
    [
      "Hvor mange søskende har Ron?",
      " 7",
      " 6",
      " 5",
      " 4",
      "B"
    ],
    [
      " Hvem gav Hagrid den flyvende motorcykel?",
      " Dumbledore",
      " James Potter",
      " Sirius Black",
      " Lily Potter",
      "C"
    ],
    [
      "Hvor mange udfordringer er der inden man når de vises sten i bog 1?",
      " 4",
      " 5",
      " 6",
      " 7",
      "D"
    ]
  ];
  
  function $(arg) { //funktion der forkorter document.getElementById til $
    return document.getElementById(arg);
  } 
  
  function displayQuestion() {
    test2 = $("test");
    if (pos >= questions2.length) {
      test2.innerHTML =
        "<h2>Du fik " +
        score +
        " ud af " +
        questions2.length +
        " spørgsmål rigtige!</h2>";
      $("test_status").innerHTML = "Quiz gennemført!";
      pos = 0;
      score = 0;
      return false;
    }
  
    $("test_status").innerHTML =
      "Spørgsmål " + (pos + 1) + " ud af " + questions2.length;
    question = questions2[pos][0];
    opA = questions2[pos][1];
    opB = questions2[pos][2];
    opC = questions2[pos][3];
    opD = questions2[pos][4];
    test2.innerHTML = "<h3>" + question + "</h3>";
    test2.innerHTML +=
      "<input type='radio' name='options' value='A'>" + opA + "<br>";
    test2.innerHTML +=
      "<input type='radio' name='options' value='B'>" + opB + "<br>";
    test2.innerHTML +=
      "<input type='radio' name='options' value='C'>" + opC + "<br>";
    test2.innerHTML +=
      "<input type='radio' name='options' value='D'>" + opD + "<br><br>";
    test2.innerHTML += "<button class=\"btn btn-primary\" onclick='checkAnswer()'>Indsend svar</button>"; // backwards-slash = escape character (ignores firstcoming symbol)
  }
  
  function checkAnswer() {
    options = document.getElementsByName("options");
    for (var i = 0; i < options.length; i++) {
      if (options[i].checked) {
        option = options[i].value;
      }
    }
    if (option == questions2[pos][5]) {
      score++;
    }
    pos++;
    displayQuestion();
  }