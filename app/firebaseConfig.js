// import admin from "firebase-admin";
// import { getFirestore } from "firebase-admin/firestore";

// if (!admin.apps.length) {
//   await admin.initializeApp({
//     credential: admin.credential.cert({
//       type: process.env.type,
//       project_id: process.env.project_id,
//       private_key_id: process.env.private_key_id,
//       private_key: process.env.private_key,
//       client_email: process.env.client_email,
//       client_id: process.env.client_id,
//       auth_uri: process.env.auth_uri,
//       token_uri: process.env.token_uri,
//       auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
//       client_x509_cert_url: process.env.client_x509_cert_url,
//       universe_domain: process.env.universe_domain,
//     }),
//   });
// }

// const db = await getFirestore();
// export { db };

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

// console.log("this is db", db);

export { db };