const contacts = require('./data.json');

// the following exercises require the data from data.json.
// you can look in that file to see the data structure you
// will be working with.

// For each exercise:
// 1. use array methods with the variable contacts to get the desired result,
// 2. store the result with a variable
// 3. appropriately log the results to the console



//You can put your solutions after each comment below:

//1. an array that contains all of the contacts that work at INSECTUS
// const insectus = contacts.filter(contact => contact.company === "INSECTUS")


// console.log(insectus)
//2. an array all of the contacts, with only the name property
// const onlyName = contacts.map(contact => contact.name)

// console.log(onlyName)
//3. an array of all of the contacts over the age of 50
// const overFifty = contacts.filter(contact => contact.age > 50)

// console.log(overFifty)
//4. the first ten contacts when alphabetically ordered by name
// const getNames = contacts.map(contact => contact.name)
// const sortAlphabetically = getNames.sort()
// const firstTen = sortAlphabetically.slice(0, 10)
// console.log(firstTen)

//5. the oldest person's name
// const getAges = contacts.map(contact => contact.age)
// const sortByAge = getAges.sort()
// const oldest = sortByAge.reverse()
// console.log(oldest[0])

//6. the contact id with the name Isabella Burke
// const findName = contacts.find(contact => contact.name === "Isabella Burke")
// console.log(findName.id)

//7. an array of all of the contacts, but with the name split up into a firstName
// and lastName properties
// const nameProperties = contacts.map(contact => {
//     const nameArray = contact.name.split(" ")
//     contact.firstName = nameArray[0]
//     contact.lastName = nameArray[1]
//     return contact
// })

// console.log(nameProperties)

//8. an array of all of the contacts where the friends property
// is an array with each contact that is their friend
const matchFriends = contacts.map(contact => {
    const friendArray = []
    contact.friends.forEach(id => friendArray.push(contacts.find(Contact => Contact.id === id)))
    contact.friends = friendArray
    return contact
})

console.log(matchFriends)



//9. the average age of the contacts
// const getAges = contacts.map(contact => contact.age)
// const averageAge = getAges.reduce((a, b) => a + b, 0) / getAges.length
// console.log(averageAge)

//10. the median age of the contacts
// const getAges = contacts.map(contact => contact.age)
// const sortByAge = getAges.sort()
// const middle = Math.floor(sortByAge.length / 2)
// let median = sortByAge.length % 2 === 1 ?
//     sortByAge[middle] : // If odd length, just take middle
//     (sortByAge[middle - 1] + sortByAge[middle]) / 2; // If even length, take median of middles
// console.log(median)
