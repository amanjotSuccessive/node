let express = require('express');
let app = express();
let mongodb = require('mongodb');
let MongoClient = mongodb.MongoClient;


//function to create database  in mongodb
createMongodb = () => {
    let url = "mongodb://localhost:27017/mydb";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Database created!");
        db.close();
    });
}

//function to create collection  in mongodb
createMongoCollection = () => {
    let url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        dbo.createCollection("customers", function (err, res) {
            if (err) throw err;
            console.log("Collection created!");
            db.close();
        });
    });
}

//function to create insert in mongodb
insertMongodb = () => {
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("mydb");
        let myobj = {
            name: "Amanjot",
            address: "667"
        };
        dbo.collection("customers").insertOne(myobj, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });
}

findObject = () => {
    let url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection("customers").findOne({}, function (err, result) {
            if (err) throw err;
            console.log(result.name);
            db.close();
        });
    });
}
