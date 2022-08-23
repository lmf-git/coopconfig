import Database from "../setup/database.mjs";
import DatabaseHelper from "../helper/databaseHelper.mjs";

import Items from "./items.mjs";
import { EMOJIS } from "../config.mjs";

export default class Useable {

    static NON_USABLE_EMOJIS = [
        "COOP",
        "VOTE_FOR",
        "VOTE_AGAINST",

        "LEGENDARY_CRATE",
        "LEGENDARY_CRATE_OPEN",
        "RARE_CRATE",
        "RARE_CRATE_OPEN",
        "AVERAGE_CRATE",
        "AVERAGE_CRATE_OPEN",

        "POLL_FOR",
        "POLL_AGAINST",
        "ROADMAP",
        "SACRIFICE_SHIELD",
        "ROCK",

        "DROPPED",
        "BASKET",

        // Maybe usable.
        "DAGGER",
    ];

    static isUsable(itemCode) {
		return this.getUsableItems().includes(itemCode);
    }

    static getUsableItems() {
        const unusable = this.NON_USABLE_EMOJIS;
        const codeFilter = itemCode => !unusable.includes(itemCode);
        return Object.keys(EMOJIS).filter(codeFilter);
    }

    static async use(userID, itemCode, useQty, note = 'Used item') {
        // Attempt to load item ownership.
        const ownedQty = await Items.getUserItemQty(userID, itemCode);

        // Check if enough qty of item is owned.
        if (ownedQty - useQty >= 0) {
            // TODO: Just ensure that subtract does this itself...? Get rid of use?
            await Items.subtract(userID, itemCode, useQty, note);
            return true;
        } else return false;
    }

}