import { DataSource } from "typeorm";
import { Outing } from "@/infrastructure/database/entity/Outing";
import { OutingDeclaration } from "@/infrastructure/database/entity/OutingDeclaration";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: Configuration.dbPort,
    username: Configuration.dbUser,
    password: Configuration.dbUserPassword,
    database: Configuration.dbDatabaseName,
    synchronize: true,
    logging: true,
    entities: [Outing, OutingDeclaration],
    subscribers: [],
    migrations: [],
})