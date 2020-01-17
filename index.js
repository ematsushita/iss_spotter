// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});



// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip.ip);
// });

// fetchCoordsByIP("162.245.144.188", (error, coordinates) => {
//   if ("It didn't work!", error) {
//     console.log(error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// });

// fetchISSFlyOverTimes({ latitude: '49.26200', longitude: '-123.09230' }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', times);
// });