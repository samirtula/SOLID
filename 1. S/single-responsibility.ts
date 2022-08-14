//Принцип единственной ответственности

//В итоге декомпозиция, избавление от антипаттерна GodObject, инкапсулирование решения одной задачи

class User {

}

class UserRepository {
    save(user) {
        //сохранение в бд
    }
}

class UserLogger {
    log(user) {
        //логирование
    }
}

class UserController {
    send() {}
}


class HttpClient {
    get() {}
    post() {}
    put() {}
    delete() {}
}

class UserService  {
    client = null;

    constructor(client) {
        this.client = client;
    }
    getOneUser(id) {}
    getAllUsers() {}
}

class RequisitesService {
    createRequisites() {}
    getRequisites() {}
    updateRequisites() {}
}