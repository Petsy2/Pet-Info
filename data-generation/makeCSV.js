const faker = require('faker');
const fs = require('fs');

const makeCSV = async () => {
    let string = 'id,first_name,last_name,job_description,image_url';
    for (let i = 0; i < 100; i++) {
        string += '\n' + i + ',' + faker.name.firstName() + ',' + faker.name.lastName() + ',' + faker.name.jobDescriptor() + ' ' + faker.name.jobType() + ',' + faker.image.imageUrl()
    }
    return string;
}



const data = makeCSV();

fs.writeFile('../data-files/csv/users.csv', data, (error) => {
    if (error) {
        console.log('error writing to csv file');
    }
    console.log('success writing to csv file')
})

//console.log(data)
