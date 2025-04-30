import { DataForShowService } from '@/services'

export default () => {
    const { $api } = useNuxtApp()

    const dataForShowService = new DataForShowService($api)

    return {
        dataForShowService,
    }
}