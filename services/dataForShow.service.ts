export class DataForShowService {
    constructor(api) {
        this.api = api
    }

    async getPosts() {
        const { data } = await this.api('posts')

        return data
    }

    async getUsers() {
        const { data } = await this.api('users')

        return data
    }
}