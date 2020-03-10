import electron, { BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import 'electron-reload';
import path from 'path';
import url from 'url';

const { app } = electron;
const PORT = process.env.PORT || 4000;

let window: BrowserWindow | null;

const createWindow = async (): Promise<void> => {
    if (process.env.NODE_ENV !== 'production') {
        await installExtension(REACT_DEVELOPER_TOOLS)
            .then((name: string) => console.log(`Added Extension:  ${name}`))
            .catch((err: any) => console.log('An error occurred: ', err));
    }

    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    if (process.env.NODE_ENV !== 'production') {
        window.loadURL(`http:localhost:${PORT}`);
        window.webContents.once('dom-ready', () => {
            window!.webContents.openDevTools();
        });
    } else {
        window.loadURL(
            url.format({
                pathname: path.join(__dirname, '/dist/index.html'),
                protocol: 'file:',
                slashes: true,
            }),
        );
    }

    window.on('closed', () => {
        window = null;
    });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (window === null) {
        createWindow();
    }
});
