// const WebSocket = require("ws");

// // Create a WebSocket server on port 3000
// const wss = new WebSocket.Server({ port: 3000 });

// wss.on("connection", (ws) => {
//     console.log("Client connected");

//     // Send a welcome message to the client
//     ws.send("Welcome to the WebSocket server!");

//     // Handle messages from the client
//     ws.on("message", (message) => {
//         console.log("Received:", message.toString());
//         ws.send(`You said: ${message}`);
//     });

//     // Handle client disconnection
//     ws.on("close", () => {
//         console.log("Client disconnected");
//     });

//     // Send a message to the client every 2 seconds
//     setInterval(() => {
//         const message = "I AM A BOT!!!!!";
//         console.log("Sending to client:", message); // Log the message in the server console
//         ws.send(`You said: ${message}`); // Send the message to the client
//     }, 2000);
// });

// console.log("WebSocket server is running on ws://localhost:3000");


const { app } = require("electron");
const WebSocket = require("ws");

let wss; // Declare WebSocket server variable

app.whenReady().then(() => {
  console.log("Electron app is ready");

  // Start WebSocket server
  wss = new WebSocket.Server({ port: 3000 });

  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.send("Welcome to the WebSocket server!");

    ws.on("message", (message) => {
      console.log("Received:", message.toString());
      ws.send(`You said: ${message}`);
    });

    ws.on("close", () => {
      console.log("Client disconnected");
    });
  });

  console.log("✅ WebSocket server running on ws://localhost:3000");
});


