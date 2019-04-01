// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(list) {
  return list.map(function (fullName) {
    const first = fullName.split(' ')[0]
    const last = fullName.split(' ')[1]
    return {firstName: first, lastName: last}
  });
}

function attributesToPhrase(list) {
  return list.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
};
// "<NAME OF DRIVER> is from <HOMETOWN>"
