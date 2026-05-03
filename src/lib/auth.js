
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// বিল্ড টাইমে যেন MONGODB_URI এর কারণে ক্র্যাশ না করে সেজন্য চেক
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/fake-db-for-build";
const client = new MongoClient(uri);
const db = client.db("qurbanihat");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  
  // baseURL এবং secret অবশ্যই স্ট্রিং হতে হবে, undefined হলে startsWith এরর আসবে
  baseURL: process.env.BETTER_AUTH_URL || "https://qurbanihat-livestock-booking-by-far-pi.vercel.app",
  secret: process.env.BETTER_AUTH_SECRET || "fallback_secret_for_build_only", 

  emailAndPassword: { 
    enabled: true, 
  },
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID || "google_id", 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "google_secret"
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