var sounds = ["1.mp3", "2.mp3", "3.mp3", "4.mp3"];

function selectResponse(response) {
	if (response.getAttribute("id") === getSoundtrack()) {
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
	console.log(valid);
	var next = document.getElementById('next');
	console.log(next);
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
	$('p').remove();
	changeSoundtrack();
}

function getSoundtrack() {
	return document.getElementById("soundtrack").getAttribute("src");
}

function printQuestion() {
	var question = document.getElementById("question");
	question.style.display = "block";
	changeSoundtrack();
}

function changeSoundtrack() {
	var index = Math.floor(Math.random() * sounds.length);
	var soundtrack = document.getElementById('soundtrack');
	var control = document.getElementById('control');
	soundtrack.setAttribute("src", sounds[index]);
	control.load();
}