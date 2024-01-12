import { DataSource } from "typeorm";

export const dataSource = new DataSource({
    type: 'mariadb',
    host: process.env.DS_HOST,
    port: 3306,
    username: process.env.DS_USER,
    password: process.env.DS_PASS,
    database: process.env.DS_DB,
    entities: [process.env.DS_ENTITIES as string],
    logging: false,
    synchronize: true
  });

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