export function makeId(length) {
    let result = "";
    let characters =
        "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm-0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

export function makeCode() {
    let result = "";
    let characters =
        "0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const Sort = (data, value) =>
    [...data].sort((a, b) => {
        switch (value) {
            case "nameUp":
                return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
            case "nameDown":
                return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;

            case "priceUp":
                return a.price - b.price;

            case "priceDown":
                return b.price - a.price;

            default:
                return false;
        }
    });
