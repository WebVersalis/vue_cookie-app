import clientAPI from "./Config/AxiosConfig";

class ScriptTagService {
    public static index(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(baseurl).get('/api/script/' + shop);
    }

    public static store(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        // const myArray = shop.split(".");
        // shop = myArray[0];
        shop = "testcookieweb";
        return clientAPI(baseurl).post('/api/script', {
            'shop': shop,
            'src': 'https://cookie.uat.testversalis.net/build/bundle.js'
        });
    }

    public static update(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(baseurl).put('/api/script/' + shop, {
            'shop': shop,
            'src': 'https://cookie.uat.testversalis.net/build/bundle.js'
        });
    }

    public static delete(shop: any) {
        const baseurl = import.meta.env.VITE_APP_COOKIE_API;
        // const myArray = shop.split(".");
        // shop = myArray[0];
        shop = "testcookieweb";
        return clientAPI(baseurl).delete('/api/script/' + shop);
    }
}

export default ScriptTagService;