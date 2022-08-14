//Принцип подстановки Барбары Лисков
//сущности которые используют родительский тип должны также работать с дочерними классами и ничего не должно ломаться
//наследуемый класс должен дополнять, а не замещать поведение базового класса(переопределеять методы родительского класса)

class Database {
    connect() {}
    read() {}
    write() {}
}

class SQLDatabase extends Database {
    connect() {}
    read() {}
    write() {}
    joinTables() {}
}

class NOSQLDatabase extends Database {
    connect() {}
    read() {}
    write() {}
    createIndex() {}
}