const { app, BrowserWindow, Tray, Menu } = require("electron");
const path = require("path");

let win;
let tray;

app.whenReady().then(() => {
    // Create a hidden window
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false, // Start hidden
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile("www/index.html");

    // Create system tray icon
    tray = new Tray(path.join(__dirname, "icon.png")); // Use a small 16x16 or 32x32 PNG icon
    const contextMenu = Menu.buildFromTemplate([
        {
            label: "Show App",
            click: () => win.show()
        },
        {
            label: "Quit",
            click: () => app.quit()
        }
    ]);

    tray.setToolTip("Hello Obinna App");
    tray.setContextMenu(contextMenu);

    // Minimize to tray instead of closing
    win.on("close", (event) => {
        event.preventDefault();
        win.hide();
    });

    // Ensure the app quits when all windows are closed (unless minimized to tray)
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") app.quit();
    });
});

