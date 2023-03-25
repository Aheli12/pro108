dog = 0;
cat = 0;
lion = 0
cow = 0;



function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/ZyhM2ZXI5/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_no_r = Math.floor((Math.random() * 255) + 1);
        random_no_g = Math.floor((Math.random() * 255) + 1);
        random_no_b = Math.floor((Math.random() * 255) + 1);

        document.getElementById("detected").innerHTML = "Detected Dog - " + dog + "Detected Cow - " + cow + "Detected Cat - " + cat + "Detected Lion - " + lion;
        document.getElementById("detected").style.color = "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")";

        document.getElementById("animal_voices").innerHTML = "Detected Voice is of - " + results[0].label;
        document.getElementById("animal_voices").style.color = "rgb(" + random_no_r + "," + random_no_g + "," + random_no_b + ")";

        img = document.getElementById("animal_images");
        if (results[0].label == "Barking") {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog + 1;
        }
        else if (results[0].label == "Meowing") {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat + 1;
        }
        else if(results[0].label == "Roaring") {
            img.src = "https://usagif.com/wp-content/uploads/2020/07/lion-roar.gif";
            lion = lion + 1;
        }
        else if(results[0].label == "Mooing") {
            img.src = "https://media0.giphy.com/media/eeN1xWYujLSvufhMwY/200w.gif";
            cow = cow + 1;
        }
        else {
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }

    }
}