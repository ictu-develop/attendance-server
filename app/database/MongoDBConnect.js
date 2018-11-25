class MongoDBConnect{

    constructor(){
        this.mongodb = require('mongodb')
        this.MongoClient = this.mongodb.MongoClient
        this.url = process.env.MongoDB
        this.db = null
    }

    async connect(){
        //Try connect to MongoDB
        try {
            var client = await this.MongoClient.connect(this.url, {useNewUrlParser: true})

            //Try select a DB
            if (this.db == null) {
                console.log('Connecting to MongoDB')
                this.db = await client.db('ictu_attendance')
            }

            if (this.db != null)
                console.log('Connected to MongoDBConnect')

        }catch (e) {
            console.log('Cannot connect to MongoDBConnect')
        }

        return this.db
    }
}

module.exports = MongoDBConnect