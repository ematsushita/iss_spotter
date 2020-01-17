const request = require('request-promise-native');


const nextISSTimesForMyLocation = function(callback) {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data)
    return response;
  }
  )}

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = (body) =>  {
  const IP = JSON.parse(body).ip
  return request(`https://ipvigilante.com/${IP}`);
};

const fetchISSFlyOverTimes = function(coords) {
  const { latitude, longitude } = JSON.parse(coords).data;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`)
}



module.exports = { nextISSTimesForMyLocation }