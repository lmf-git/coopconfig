// import EMOJIS from '../../config/emojis.mjs';
import ITEMS from '../../config/items.mjs';

const EMOJI_BASE_URL = 'https://cdn.discordapp.com/emojis';

export default class EmojiHelper {

    static idToURL(id, size = 240) {
        return `${EMOJI_BASE_URL}/${id}.webp?size=${size}&quality=lossless`;
    }
    static itemCodeToUnicode(code) {
        return ITEMS[code.toUpperCase()].unicode || null;
    }
    static itemCodeToEmojiURL(code) {
        let url = null;

        const item = ITEMS[code.toUpperCase()] || null;
        const itemCode = item.id || '';
        const idParts = itemCode.split(':')
        const idPart = idParts[idParts.length - 1];
        const isEmojiID = !isNaN(idPart);

        if (isEmojiID)
            url = this.idToURL(idPart);

        return url;
    }
}
