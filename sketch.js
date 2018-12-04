let tune;
let fft;

function preload() {
    tune = loadSound('Smokey_Tides_mp3.mp3');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    fft = new p5.FFT();
    tune.play();
    noStroke();
    colorMode(HSB);
}

function draw() {
    background(0, 0, 0, 0.3);
    let spectrum = fft.analyze();
    let waveform = fft.waveform();
    for (let i = 0; i < spectrum.length; i++) {
        let hue = map(i, 0, spectrum.length, 0, 360);
        let x = map(i, 0, spectrum.length, 0, width);
        let y = height - map(spectrum[i], 0, 255, 0, height);
        let size = map(waveform[i], -1, 1, 3, 10);
        fill(hue, 100, 100);
        ellipse(x, y, size);
    }
}