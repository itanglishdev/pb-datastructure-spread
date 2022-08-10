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