function getRandomCars() {
    fetch('/random_car')
    .then(r => r.json())
    .then(data => {
        document.getElementById('random-result').innerText =
            "🚗 " + data["car brand"] + " " + data["model"] + " (" + data["color"] + ") - " + data["price"];
        document.getElementById('random-result').style.display = "block";
    });
}

function getRandomColor() {
    fetch('/random_color')
    .then(r => r.json())
    .then(data => {
        document.getElementById('random-result').innerText =
            "🎨 " + data["name"] + " (" + data["number"] + ")";
        document.getElementById('random-result').style.display = "block";
    });
}

function getTip() {
    fetch('/tip')
    .then(r => r.json())
    .then(data => {
        document.getElementById('random-result').innerText = "💡 " + data["tip"];
        document.getElementById('random-result').style.display = "block";
    });
}

function calculate() {
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    fetch('/calculate?num1=' + n1 + '&num2=' + n2)
    .then(r => r.json())
    .then(data => {
        document.getElementById('calc-result').innerText =
            "➕ " + data.num1 + " + " + data.num2 + " = " + data.result;
        document.getElementById('calc-result').style.display = "block";
    });
}

function getGreeting() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    fetch('/greet?name=' + name + '&age=' + age)
    .then(r => r.json())
    .then(data => {
        document.getElementById('greet-result').innerText = data.greeting;
        document.getElementById('greet-result').style.display = "block";
    });
}