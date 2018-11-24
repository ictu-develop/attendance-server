class Router{

    constructor(app, db){
        this.app = app
        this.db = db
    }

    get(){
        this.app.get('/', (req, res)=>{
            if (this.db != null)
                res.send('Wellcome')
            else
                res.send('Cannot connect to MongoDBConnect')
            res.end()
        })
    }

    post(){
        this.app.post('/', async (req, res)=>{
            if (this.db != null)
                res.send('Wellcome')
            else
                res.send('Cannot connect to MongoDBConnect')
            res.end()
        })
    }

    build(){
        this.get()
        this.post()
    }

}

module.exports = Router