const QRCode = require('qrcode')
const path = require('path')

function QR (url, name) {
    if (!url || !name) {
        throw new Error('error occur: url or name lost')
    }
    this.url = url
    this.name = name
    // return new QR()
}

QR.prototype.do = function () {
    const _path = `./img/${(this.name + '_' +new Date().getTime()) || new Date().getTime()}.png`
    console.log(`==================>正在将${this.url}转换成二维码`)
    return new Promise((resolve, reject) => {
        QRCode.toFile(path.resolve(__dirname, _path), this.url, {
            color: {
              dark: '#00F',  // Blue dots
              light: '#0000' // Transparent background
            }
          }, function (err) {
            err? reject(err): resolve({
                code: 1,
                position: _path
            })
          })
    })
}

module.exports = QR
