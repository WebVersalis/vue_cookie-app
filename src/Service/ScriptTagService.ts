import clientAPI from "./config/AxiosConfig";

class ScriptTagService {
    public static index(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(baseurl).get('/api/script/' + shop);
    }

    public static store(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(baseurl).post('/api/script', {
            'shop': shop,
            'src': 'https://dry-tramp.surge.sh/build/bundle.js'
        });
    }

    public static update(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(baseurl).put('/api/script/' + shop, {
            'shop': shop,
            'src': 'https://dry-tramp.surge.sh/build/bundle.js'
        });
    }

    public static delete(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(baseurl).delete('/api/script/' + shop);
    }
}

export default ScriptTagService;