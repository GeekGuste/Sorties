import {createConnection} from "typeorm";

const dv = createConnection({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: 'root',
    password: '',
    database: 'sortie',
    entities: [],
    synchronize: true
})