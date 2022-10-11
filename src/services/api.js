import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://api.ninacai.com.br/',
//     timeout: 10000,
//     headers: { 'Content-Type': 'application/json' }
// });

export default axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 10000,
    headers: { 'content-type': 'application/json' }
});