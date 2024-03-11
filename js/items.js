const imageUrls = [
    'https://dr.savee-cdn.com/things/6/4/0931a3aad3fe1c3f114f4a.webp',
    'https://dr.savee-cdn.com/things/6/5/e92bd09bcfc189c00b435a.webp',
    'https://dr.savee-cdn.com/things/5/e/8b5b7eb191c717d17ccfea.webp',
    'https://dr.savee-cdn.com/things/6/5/48f4b64e6f08f27cb92ef7.webp',
    'https://dr.savee-cdn.com/things/6/4/9fc3a296d2d243a443801d.webp',
    'https://dr.savee-cdn.com/things/6/5/dd1164360b890fb4bf1768.webp',
    'https://dr.savee-cdn.com/things/6/5/8bf967611a20b1976aea90.webp',
    'https://dr.savee-cdn.com/things/6/5/e1e48e8a561d909b45a006.png',
    'https://dr.savee-cdn.com/things/6/3/de3d16632ee2b7bbe8caa3.webp',
    'https://dr.savee-cdn.com/things/6/5/e0fdad5e16c848d19e9f75.webp',

    // Add more as needed
];

export const items = [];

for (let i = 0; i < 80; i++) {
    const item = {
        id: i,
        imgUrl: imageUrls[i % imageUrls.length]
    };
    items.push(item);
}