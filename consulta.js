const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb+srv://dswa5:dswa5@cluster0.bpnnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", 
                    {useUnifiedTopology: true}),
                    (error, connection) => {
                        if(error) return console.log(error);
                        global.connection = connection.db("ifsp");
});
