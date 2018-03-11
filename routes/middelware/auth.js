const jwt = require('jsonwebtoken')

module.exports = {
    generate(data){
        return jwt.sign(data, process.env.SECRET)
    },
    verify: (req, res, next) => {
        if (!req.headers.token) return res.status(401).send({ message: 'not authorize'});
        
        try {
            let decode = jwt.verify(req.headers.token, process.env.SECRET);
            req.body.id = decode.id;
            next();
        } catch (error) {
            return res.status(403).send({ message: 'not authorize'})
        }
    }
}