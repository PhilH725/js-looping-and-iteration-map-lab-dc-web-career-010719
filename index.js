// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    let a = driver.split(' ')[0]
    let b = driver.split(' ')[1]
    return {firstName: a, lastName: b}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
