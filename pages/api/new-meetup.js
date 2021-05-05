// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import MongoClient from "mongodb";

export default async (req, res) => {
    if (req.method === "POST") {
        const data = req.data;

        const client = await MongoClient.connect(
            process.env.MONGODB_HOST
        );

        const db = client.db();
        const meetupsCollection = db.collection("meetups");
        const result = await meetupsCollection.insertOne(data);

        console.log(`result`, result);
        client.close();

        res.status(201).json({message:'inserted'})
    }

    else {
        const client = await MongoClient.connect(
            process.env.MONGODB_HOST
        );

        const db = client.db();
        const meetupsCollection = db.collection("meetups");


        console.log(`result`,await meetupsCollection.find({}).toArray());
        client.close();

       res.status(201).json({})
    }
};
