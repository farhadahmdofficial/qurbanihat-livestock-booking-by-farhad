
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("qurbanihat");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  // বিল্ড এরর ফিক্স করার জন্য নিচের ২ লাইন অত্যন্ত জরুরি
  baseURL: process.env.BETTER_AUTH_URL || "https://qurbanihat-livestock-booking-by-far-pi.vercel.app",
  secret: process.env.BETTER_AUTH_SECRET, 

  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, 
  }
});


// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db("qurbanihat");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
//     emailAndPassword: { 
//     enabled: true, 
//   },
//   socialProviders: {
//         google: { 
//             clientId: process.env.GOOGLE_CLIENT_ID, 
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//             // clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         }, 
//     }
// });




















// import { betterAuth } from "better-auth";
// import { MongoClient } from "mongodb";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";

// const client = new MongoClient(process.env.MONGODB_URI);
// const db = client.db("qubanirhat");

// export const auth = betterAuth({
//   database: mongodbAdapter(db, {
//     // Optional: if you don't provide a client, database transactions won't be enabled.
//     client
//   }),
//     emailAndPassword: { 
//     enabled: true, 
//   },
// });




// import { betterAuth } from "better-auth";
// export const auth = betterAuth({
//   //...
// });









// import { betterAuth } from "better-auth";

// export const auth = betterAuth({
//   //...
// });