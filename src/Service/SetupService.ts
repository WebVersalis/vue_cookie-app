import clientAPI from "./config/AxiosConfig";

class SetupService {
    public static getInfo(shop: any): Promise<any> {
        const base_url: string = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(base_url).get(`/api/setups/${shop}`);
    }
}

export default SetupService;