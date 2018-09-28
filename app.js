
let mobileNet;
let tiger;

function setup() {
    createCanvas(640, 480);
    background(0);

    tiger = createImg('img/tiger.jpg', () => {
        image(tiger, 0, 0, width, height);
    });
    tiger.hide();



    mobileNet = ml5.imageClassifier('MobileNet', () => {
        console.log('model ready');

        mobileNet.predict(tiger, (err, results) => {
            if (err) {
                console.error(err);
            } else {
                console.log(results)
            }
        });
    });
}