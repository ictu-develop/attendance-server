class Server{

    constructor(){
        this.express = require('express')
        this.app = this.express()
        this.port = process.env.PORT
    }

    build(){
        this.app.listen(this.port, ()=>{
            console.log('API running on port ' + this.port)
        })
        return this.app
    }
}

module.exports = Server