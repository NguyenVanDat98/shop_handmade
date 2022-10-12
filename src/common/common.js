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
const img1 = "https://s.alicdn.com/@sc04/kf/HTB1kpVHa0fvK1RjSszhq6AcGFXaC.jpg_280x280.jpg";
const img2 = "https://s.alicdn.com/@sc04/kf/H6371a8b7bee746e684e9fbbe0c1893b0f.jpg_960x960.jpg";
const img3 = "https://s.alicdn.com/@sc04/kf/H8c076c56ea7f4742a16209a79d8e8dbba.jpg_960x960.jpg";
const img4 = "https://s.alicdn.com/@sc04/kf/H360a895459454ad2b6494640dd8f3595r.jpg_960x960.jpg";
export const listImage = [img1, img2, img3, img4];
