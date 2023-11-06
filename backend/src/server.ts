import app from './app';
import mongoose from 'mongoose';
import env from './util/validateEnv';

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING)
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    })
    .catch((e) => {
        console.log(e)
    })

// import { MongoClient, ServerApiVersion } from 'mongodb'
// const uri = env.MONGO_CONNECTION_STRING;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// })

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect().then(() => {
//             console.log("Mongoose connected");
//             app.listen(port, () => {
//                 console.log(`Server running on port ${port}`);
//             })
//         }).catch(console.error);
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

