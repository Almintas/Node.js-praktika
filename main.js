const BASE_URL = 'http://localhost:3000';
const form = document.getElementById('formWrapper');
const input = document.getElementById('inputWrapper');

fetch(BASE_URL + '/api/cars/bmw')
.then((res) => res.json())
.then((cars) => {
    cars.forEach((car) => {
        const card = document.createElement('div');

        form.appendChild(card);
    });
});