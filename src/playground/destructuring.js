//
// Object Destructuring
//

// const person = {
//   name: 'Hunter',
//   age: 26,
//   location: {
//     city: 'Auburn',
//     temp: 85
//   }
// }

// const { name = 'Anonymous', age } = person

// const name = person.name
// const age = person.age

// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher

// console.log(publisherName) 

//
// Array Destructuring
//

// const address = ['555 North Dean Rd.', 'Auburn', 'Alabama', '36830']

// const [, city, state] = address

// console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [itemName, , mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}.`) // - A medium Coffee (hot) costs $2.50