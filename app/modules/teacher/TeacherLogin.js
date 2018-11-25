class TeacherLogin {

    constructor(db){
        this.db = db
}

    async login(username, password){
        var json = await this.db.collection('teacher_info').find({'teacher_account.email': username, 'teacher_account.hash_password': password})
            .toArray()
        console.log(json[0])
        return json[0]
    }
}

module.exports = TeacherLogin