const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Cloud function to toggle LEDs based on request
exports.toggleLED = functions.https.onRequest((req, res) => {
  const color = req.query.color;// Get the LED color from the query parameter
  if (color === "red" || color === "green" || color === "blue") {
    admin.database().ref("/leds").set({color: color});
    res.send(`Toggled ${color} LED`);
  } else {
    res.status(400).send("Invalid color");
  }
});
