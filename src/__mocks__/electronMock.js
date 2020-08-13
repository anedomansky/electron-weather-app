// eslint-disable-next-line import/prefer-default-export
const data = [{
    id: 0,
    weather_state_name: 'heavy clouds',
    weather_state_abbr: 'hc',
    wind_direction_compass: 'NNE',
    created: '2020-07-19',
    applicable_date: '2020-07-19',
    min_temp: 20.5,
    max_temp: 25.4,
    the_temp: 24.3,
    wind_speed: 7,
    wind_direction: 2,
    air_pressure: 2,
    humidity: 40,
    visibility: 10,
    predictability: 90,
}];

export const ipcRenderer = {
    invoke: () => new Promise((resolve, reject) => {
        process.nextTick(() => (data.length > 0
            ? resolve(data)
            : reject(new Error('Error'))));
    }),
};

export const shell = {
    openExternal: jest.fn(),
};
