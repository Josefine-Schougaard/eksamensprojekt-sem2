/*function startQuiz() {
    document.getElementById("num2").style.visibility = "hidden";
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
      " Hvad hedder de 4 kollegier på Hogwarts?",
      " Gryffindor - Slytherdor - Ravenhawk - Hufflepuf.",
      " Griffin - Slyther - Raven - Huff.",
      " Gryffindor - Slytherin - Ravenclaw - Hufflepuf.",
      " Gruffendor - Sliderin - Ravenlaw - Hufflerbuf.",
      "C"
    ],
    [
      "Hvor går toget til Hogwarts fra?",
      " platform 9",
      " Platform 9 3/4",
      " Platform 10",
      " Platform 9 1/2",
      "B"
    ],
    [
      " Hvem er rektor på Hogwarts?",
      " Albus Dumbledore",
      " Harry Potter",
      " Cornelius Fudge",
      " Arthur Weasley",
      "A"
    ],
    [
      "Hvad hedder Harry Potters forældre?",
      " Lilje og Jones Potter",
      " Lila og James Potter",
      " Lily og Jonas Potter",
      " Lily og James Potter",
      "D"
    ]
  ];
  
  function $(arg) { //funktion der forkorter document.getElementById til $
    return document.getElementById(arg);
  } 
  
  function displayQuestion() {
    test2 = $("test2");
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
  
    $("test_status2").innerHTML =
      "Spørgsmål " + (pos + 1) + " ud af " + questions2.length;
    question2 = questions2[pos][0];
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
    test2.innerHTML += "<button class=\"btn num2 btn-primary\" onclick='checkAnswer()'>Indsend svar</button>"; // backwards-slash = escape character (ignores firstcoming symbol)
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
  */
