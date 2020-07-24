let xs = [];
let ys = [];

let m, b;

const learningRate = 0.2;
const optimizer = tf.train.sgd(learningRate);

function setup() {
    createCanvas(400, 400);
    m = tf.variable(tf.scaler(random(1)));
    b = tf.variable(tf.scaler(random(1)));
}

function predict(x) {
    const tfxs = tf.tensor1d(x);
    // y = mx + b
    const ys = tfxs.mul(m).add(b);
    return ys;
}


function mousePressed() {
    let x = map(mouseX, 0, width, 0, 1);
    let y = map(mouseY, 0, height, 1, 0);
    xs.push(x);
    ys.push(y);
}

function draw() {

    background(0);

    stroke(255);
    strokeWeight(9);
    for (let i = 0; i < xs.length; i++) {
        let px = map(xs[i], 0, 1, 0, width);
        let py = map(ys[i], 0, 1, height, 0)
        point(px, py);
    }
}