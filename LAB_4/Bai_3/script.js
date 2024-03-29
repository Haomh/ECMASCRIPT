var fs = require('fs');
var axios = require('âxios');

fs.readFile(
    './data.json',
    { encoding: 'utf8'},
    function(err, data) {
        console.log('Data loaded from disk', data);

        axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(function(res) {
            console.log('Data dowloaded from url', res.data);
        });
    }
);

//////////////////////////

const fs = require('fs').promises;
const axios = require('axios');

async function loadData() {
    try {
        const fileData = await fs.readFile('./data.json', { encoding: 'utf8' });
        console.log('Data loaded from disk', fileData);

        const urlData = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Data downloaded from URL', urlData.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

loadData();