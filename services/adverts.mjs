import Database from "../setup/database.mjs";
import DatabaseHelper from "../helper/databaseHelper.mjs";

export default class Adverts {

    static async latest() {
        const query = {
            name: "latest-advert",
            text: `SELECT * FROM adverts ORDER BY id DESC LIMIT 1`
        };
        
        return DatabaseHelper.singleQuery(query);
    }
}