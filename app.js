
let mobileNet;
let tiger;

function preload() {
    //tiger = createImg('img/tiger.jpg');
}

function setup() {
    createCanvas(1400/2, 697/2);
    background(0);

    tiger = createImg('img/tiger.jpg', () => {
        image(tiger, 0, 0, tiger.width/2, tiger.height/2);
    });
    tiger.hide();



    ml5.imageClassifier('MobileNet').then((classifier) => {
        console.log('model ready');
        mobileNet = classifier;
        return mobileNet.predict(tiger)
    })
    .then(results => {
        console.log(results);
        fill(0);
        textSize(64);
        text(results[0].className, 10, height-100);
        createP(results[0].probability);
    })
    .catch(err => {
        console.log(err);
    });

}