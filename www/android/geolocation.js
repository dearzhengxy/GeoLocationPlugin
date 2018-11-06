var exec = require('cordova/exec');

var GaoDe = {
    getCurrentPosition:function (successFn,errorFn) {
        exec(successFn,errorFn,'Geolocation','getLocation',[]);
    }
};

module.exports = GaoDe;
