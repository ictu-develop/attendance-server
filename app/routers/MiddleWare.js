class MiddleWare {

    constructor(app, DB) {
        this.router = require('./Router')
        this.app = app
        this.DB = new DB()
        this.db = null
    }

    //Connect Mongo Database when request to path '/'
    root(){
        this.app.use('/', async (req, res, next) => {
            //Connect Mongo Database
            this.db = await this.DB.connect()

            // Init routers
            new this.router(this.app, this.db).build()
            next()
        })
    }

    build(){
        this.root()
    }

}

module.exports = MiddleWare