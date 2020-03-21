// const fs = require('fs');

// export default function get(url) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(__dirname + '__mock-data__/', 'utf8', (err, data) => {
//             if (err) {
//                 return reject(err)
//             }
//             resolve({entity: JSON.parse(data)});
//         })
//     })
// }