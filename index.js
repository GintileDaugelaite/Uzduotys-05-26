import express from 'express';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { faker } from '@faker-js/faker';

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/templates/index.html')
})

app.get('/person', (req, res) => {

    const fakeID = {
        image: faker.image.avatar(),
        name: faker.name.firstName(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.city(),
        vehicle: faker.vehicle.vehicle(),
        music: faker.music.genre()
    }
    res.json(fakeID)
})

app.listen(3000)