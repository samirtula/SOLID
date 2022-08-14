//принцип разделения интерфейса
//программные сущности не должны зависеть от методов которые они не используют
//нельзя заставлять реализовывать методы интерефейса если пользователю они не нужны
//нельзя делать общее решенеие(общий интерфейс)

//В итоге избавляем программные сущности от методов, которые они не используют
//получаем болдее предсказуемую работу
//код тсановится менее связанным


interface Router {
    parseUrl: (url) => void;
    addQueryParams: (params) => void;
}

interface IClientRouter extends Router {
    navigate: (route: Router) => void;
    attachEventListeners: () => void;
}


interface IServerRouter extends Router {
    prepareUrlForClient: (url) => void;
}

class ServerRouter implements IServerRouter {
    parseUrl(): void {}
    addQueryParams(params): void {}
    prepareUrlForClient(): void {}
}

class ClientRouter implements IClientRouter {
    parseUrl(): void {}
    addQueryParams(params): void {}
    navigate(route): void {}
    attachEventListeners(): void {}
}