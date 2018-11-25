class Router{

    constructor(app, db){
        this.app = app
        this.db = db
        this.TeacherLogin = require('../modules/teacher/TeacherLogin')
    }

    get(){
        this.app.get('/', (req, res)=>{
            if (this.db != null)
                res.send('Wellcome')
            else
                res.send('Cannot connect to MongoDBConnect')
            res.end()
        })

        this.app.get('/teacher/login', async (req, res)=>{
            var login = await new this.TeacherLogin(this.db).login(req.query.username, req.query.password)
            res.setHeader('Content-Type', 'application/json');
            if (typeof login == 'undefined'){
                res.send({code: 401})
            } else{
                res.send(
                    {
                        code: 200,
                        teacher_id: login.teacher_id,
                        teacher_name: login.teacher_name,
                        teacher_email: login.teacher_account.email,
                        teacher_phone_number: login.teacher_account.phone_number
                    }
                )
            }
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