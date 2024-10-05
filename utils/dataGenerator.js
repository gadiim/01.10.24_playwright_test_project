const { faker } = require('@faker-js/faker');

class DataGenerator {
    static generateUserData() {
        return {
            username: faker.internet.userName(),
            password: faker.internet.password(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email()
        };
    }
}

module.exports = { DataGenerator };
