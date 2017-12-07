const { name, siteUrl } = process.env;
const QR = require('./service'),
    qr = new QR(siteUrl, name)

qr.do()
.then( res => {
    if (res.code == 1) {
        console.log('==================>转化成功', `路径: ${res.position.split('./')[1]}`)
    }
}, err => {
    console.log(err)
})
.catch(e => {
    console.log(e.message)
})