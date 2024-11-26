// Constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_HEIGHT = 700;
const CANVAS_WIDTH = 800;


// Objects
var upgradeVal = {
    hackMoney: 1,
    hackSpeed: 1,
    recoverySpeed: 1
};
var servers = {
    server1: {
        unlocked: false,
        moneyMult: 7,
        speedMult: 1
    }
}



/**
 * Main loop of program
 */
function update() {
    // Move canvas to bottom-right corner
    canvas.translate(0, 100);
}