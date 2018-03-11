var sounds = [{
	id : 1,
	src: "Harder"
	},
	{
	id : 2,
	src: "Better"
	}, 
	{
	id : 3,
	src: "Faster"
	}, 
	{
	id : 4,
	src: "Stronger"
	}
];

function selectResponse(response) {
	console.log("response.innerText = " + response.innerText);
	console.log("getSoundtrack() = " + getSoundtrack());
	if (response.innerText.toLowerCase() == getSoundtrack().toLowerCase()) {
		validResponse();
	} else {
		wrongResponse();
	}
}

function validResponse() {
	$('#ready').remove();
	$('p').remove();
	$('#return').remove();
	var valid = document.createElement('p');
	var next = document.getElementById('next');
	valid.textContent = 'Well done!';
	valid.setAttribute("style", "background-color: green;");
	next.setAttribute("style", "display: inline;");
	document.body.appendChild(valid);
	document.body.appendChild(next);
}

function wrongResponse() {
	$('#ready').remove();
	$('p').remove();
	var next = document.getElementById('next');
	next.setAttribute("style", "display: none;");
	var wrong = document.createElement('p');
	wrong.textContent = 'Try again!';
	wrong.setAttribute("style", "background-color: red;")
	document.body.appendChild(wrong);
}

function nextQuestion() {
	var next = document.getElementById('next');
	next.setAttribute("style", "display: none;");
	changeQuestion();
}

function getSoundtrack() {
	return document.getElementById("soundtrack").getAttribute("class");
}

// function printQuestion() {
	// var question = document.getElementById("question");
	// question.style.display = "block";
	// changeQuestion();
// }

$("#ready").click(function() {
	$("#question").show(500);
	$("#ready").hide();
	changeQuestion();
});

function changeSoundtrack() {
	var index = Math.floor(Math.random() * sounds.length);
	var soundtrack = document.getElementById('soundtrack');
	var control = document.getElementById('control');
	console.log("sounds : " + sounds);
	console.log("index : " + index);
    console.log("sounds[index] : " + sounds[index].src);
	soundtrack.setAttribute("src", sounds[index].src + ".mp3");
	soundtrack.setAttribute("class", sounds[index].src);
	control.load();
}

function moveToNextQuestion() {
	var responses = sounds.slice();
	var answers = [];
	
	while(responses.length > 0) {
		var index = Math.floor(Math.random() * responses.length);
		console.log(responses[index].src);
		answers.push(responses[index]);
		responses.splice(index, 1);
	}
	
	console.log(answers);
	for (var i = 0; i < answers.length; i++) {
		console.log(answers[i].src);
		document.getElementById(i).innerText = answers[i].src;
	}
}

function changeQuestion() {
	changeSoundtrack();
	moveToNextQuestion();
}

$(".nextButton").click(function() {
	$("#question").hide(500);
	$('#next').hide(500);
	$('p').remove();
	changeQuestion();
	$("#question").show(500);
});