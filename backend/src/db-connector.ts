import { DataSource } from "typeorm";

const dataSourceOptions = require('../dataSourceOptions.json')

export const dataSource = new DataSource(dataSourceOptions);

export const Manager = dataSource.manager
export const UserRepository = dataSource.getRepository('user')

dataSource
    .initialize()
    .then(() => {
        console.log('INFO :: Data Source has been initialized');
    })
    .catch((err) => {
        console.error('ERROR :: Data Source initialization error', err);
    })

export default dataSource;