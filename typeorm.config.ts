import { DataSourceOptions } from "typeorm";

const config: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'your_username',
    password: 'your_password',
    database: 'your_database',
    entities: [/* Array of entity classes */],
    synchronize: true,
    logging: true,
};

export default config;