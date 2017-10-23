var fs = require('fs');
var fileName = 'BA (0).txt';
var Q = require('q');
var index = 0;
const res = [];
var child_process = require('child_process');
var command = 'start BadApple.wav';
var clear = 'clear';
var reset = 'reset';
var result;
try {
    child_process.execSync(command);
} catch (error) {
    console.log('err:', error);
}

fs
    .readdir(`./out/`, function (err, data) {
        let temp = data.map((item, i) => {
            let defer = Q.defer();
            fs.readFile(`./out/BA (${i}).txt`, 'utf8', function (err, data) {
                defer.resolve(data);

            });
            return defer.promise;
        })
        Q
            .all(temp)
            .then((data) => {
                // console.clear();
                process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H');
                var stime = Date.now();
                var i = 0,
                    caf = 33;
                var stime = 0,
                    ftime = 0;
                stime = Date.now();

                while (i < data.length) {
                    if (i % 30 == 0) {
                        caf = 43;
                    } else {
                        caf = 33;
                    }
                    ftime = Date.now();
                    if ((ftime - stime) >= caf) {
                        i++;
                        stime += caf;
                        console.log(data[i]);
                        // console.log('Frame:', i);
                    }
                }

            })
    });