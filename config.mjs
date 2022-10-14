import EMOJIS_CONFIG from "./config/emojis.mjs";
import RAW_EMOJIS_CONFIG from './config/rawemojis.mjs';
import CHANNELS_CONFIG from './config/channels.mjs';
import CATEGORIES_CONFIG from './config/categories.mjs';
import ROLES_CONFIG from './config/roles.mjs';
import BOTS_CONFIG from './config/bots.mjs';
import ITEMS_CONFIG from './config/items.mjs';

export const EMOJIS = EMOJIS_CONFIG;
export const RAW_EMOJIS = RAW_EMOJIS_CONFIG;
export const CHANNELS = CHANNELS_CONFIG;
export const CATEGORIES = CATEGORIES_CONFIG;
export const ROLES = ROLES_CONFIG;
export const BOTS = BOTS_CONFIG;
export const ITEMS = ITEMS_CONFIG;

// Name explicitly on multi-line for easier IDE experience.
const CONFIG = {
    EMOJIS,
    RAW_EMOJIS,
    CHANNELS,
    CATEGORIES,
    ROLES,
    BOTS,
    ITEMS
};
export default CONFIG;