class Configuration {
    static dbPort: number = parseInt(process.env.DB_PORT as string);
    static dbUser = process.env.DB_USER;
    static dbRootPassword = process.env.DB_ROOT_PASSWORD;
    static dbUserPassword = process.env.DB_USER_PASSWORD;
    static dbDatabaseName = process.env.DB_DATABASE;
}