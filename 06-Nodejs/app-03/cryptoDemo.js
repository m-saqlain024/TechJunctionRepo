import crypto from 'crypto'

// createhash

const hash = crypto.createHash('sha256')
hash.update('password12345')
console.log(hash.digest('hex'))

crypto.randomBytes(12, (err ,buf)=>{
    if(err) throw err;
    console.log(buf.toString('hex'))
})
