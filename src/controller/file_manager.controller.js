var fs = require('fs');

var FileManager = function() {
    this.uploadFile = (base64file, path) => {
        return new Promise((resolve, reject) => {
            try {
                const type = base64file.split(';')[0].split('/')[1];
                let file = base64file.replace(/^data:image\/png;base64,/, "");
                fs.writeFile(path + "." + type, file, {encoding: 'base64'}, (err) => {
                    if(err) {
                        reject(err);
                    }
                    resolve(path + "." + type);
                })
            } catch(err) {
                reject(err);
            }
        })
    }

    this.returnFile = (path) => {
        return new Promise((resolve, reject) => {
            try {
                var bitmap = fs.readFileSync(path);
                resolve(new Buffer(bitmap).toString('base64'));
            } catch(err) {
                reject(err);
            }
        })
    }
}

module.exports = new FileManager();