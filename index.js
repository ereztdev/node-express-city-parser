const express = require('express');
const app = express();
const port = 3000;
let fs = require('fs');

app.get('/allCities', (request, response) => {
    fs.readFile('./cityList.json', 'utf8', function (err, data) {
        if (err) throw err;
        let cityNameArr = [];
        let obj = JSON.parse(data);
        let city;
        for (city of obj) {
            cityNameArr.push(city.name)
        }
        //console.log(cityNameArr);
        response.send(cityNameArr);
    });

});

app.get('/city', (request, response) => {
    fs.readFile('./cityList.json', 'utf8', function (err, data) {
        if (err) throw err;
        let cityArr = [];
        let obj = JSON.parse(data);
        let city;
        for (city of obj) {
            if (city.name === 'Huntsville') {
                cityArr.push({"country": city.country});
            }
        }
        // console.log(cityArr);
        response.send(cityArr);
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});