//принцип инверсии зависимостей
//модули высокого уровня не должны зависеть от модулей более низкого уровня
//все модули должны зависеть от абстракций
//абтсракции не должны зависеть от деталей
//детали должны зависеть от абстракций

interface MusicApi {
    getTracks: () => void;
}

class YandexMusicApi implements MusicApi {
    getTracks(): void {}
}

class SpotifyApi implements MusicApi {
    getTracks(): void {}
}


class MusicClient implements MusicApi {
    client: MusicApi;

    constructor(client: MusicApi) {
        this.client = client;
    }

    getTracks() {
        this.client.getTracks();
    }
}

const MusicApp = () => {
    const API: MusicApi = new MusicClient(new YandexMusicApi());

    API.getTracks
}

