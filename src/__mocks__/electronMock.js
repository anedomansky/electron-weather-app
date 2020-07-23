// eslint-disable-next-line import/prefer-default-export
export const ipcRenderer = {
    on: jest.fn(),
    removeAllListeners: jest.fn(),
    send: jest.fn(),
};

export const shell = {
    openExternal: jest.fn(),
};
