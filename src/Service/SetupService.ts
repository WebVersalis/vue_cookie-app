import clientAPI from "./Config/AxiosConfig";
import {setup} from "@/model";

class SetupService {
    public static getInfo(shop: any): Promise<any> {
        const base_url: string = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(base_url).get(`/api/setups/${shop}??groups[]=translations`);
    }

    public static save(setup: setup, shop: any, language?: string): Promise<any> {
        const base_url: string = import.meta.env.VITE_APP_COOKIE_API;
        const myArray = shop.split(".");
        shop = myArray[0];
        return clientAPI(base_url).put(`/api/setups/${shop}?locale=${language}`, setup);
    }
}

export default SetupService;