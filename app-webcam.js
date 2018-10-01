
let mobileNet;
let video;
let label, prob;

function setup() {
    createCanvas(640, 540);

    video = createCapture(VIDEO);
    video.hide();

    ml5.imageClassifier('MobileNet', video).then((classifier) => {
        console.log('model ready');
        mobileNet = classifier;
        return mobileNet.predict(gotResults);
    })

}

function gotResults(err, results) {
    if (err) 
        console.log(err);
    else {
        //console.log(results);
        label = results[0].className;
        prob = Math.round(results[0].probability * 100) / 100;
        mobileNet.predict(gotResults);
    }
}


function draw() {
    background(0);

    // video
    image(video, 0, 0);

    // text label
    fill(255);
    textSize(24);
    text(label, 10, height-20);
    text(prob, width-100, height-20)
}