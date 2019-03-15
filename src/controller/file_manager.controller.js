var fs = require('fs');

var FileManager = function() {
    this.uploadFile = (base64file, path) => {
        return new Promise((resolve, reject) => {
            try {
                let file = base64file.split(';base64,').pop();
                fs.writeFile(path, file, {encoding: 'base64'}, (err, data) => {
                    if(err) {
                        reject(err);
                    }
                    resolve(data);
                })
            } catch(err) {
                reject(err);
            }
        })
    }
}

module.exports = new FileManager();