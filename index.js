const euroCountries = [
  "italy", "spain", "georgia", "ukraine",
]

const asiaCountries = [
  "thailand", "china", "mongolia", "singapore"
]

for (let i = 0; i < asiaCountries.length; i++) {
  euroCountries.push(asiaCountries[i])

}

console.log(euroCountries);

const euroCountriesTwo = [
  "italy", "spain", "georgia", "ukraine",
]

const asiaCountriesTwo = [
  "thailand", "china", "mongolia", "singapore"
]

const allCountriesTwo = euroCountriesTwo.concat(asiaCountriesTwo)
console.log(allCountriesTwo);


// Ex 2

const newCountryContainer = [...asiaCountries]
console.log(newCountryContainer);

// Ex 3
const arr4 = [8, 9, 25];
console.log(Math.max(...arr4));

// Ex 4

console.log(Math.min(...arr4));

// Ex 5

const person = { name: "John" }
const job = { role: "Teacher" }

const personTwo = person
console.log(personTwo);

const employee = { ...person, ...job, }
console.log(employee);