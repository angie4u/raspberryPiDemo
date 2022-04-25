'use strict';

const imu = require("node-sense-hat").Imu;
const IMU = new imu.IMU();

function Sensor(/* options */) {
  // nothing todo
}

Sensor.prototype.init = function (callback) {
  // nothing todo
  callback();
}

Sensor.prototype.read = function (callback) {
  IMU.getValue((err, data) => {
  if (err !== null) {
    console.error("Could not read sensor data: ", err);
    return;
  }
  // return data.humidity;
  callback(null, data.humidity)

});
}

module.exports = Sensor;

