// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip.ip);
// });

// fetchCoordsByIP("162.245.144.188", (error, data) => {
//   if ("It didn't work!", error) {
//     console.log(error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', data);
// });

fetchISSFlyOverTimes({ latitude: '49.26200', longitude: '-123.09230' }, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned flyover times:', data);
});