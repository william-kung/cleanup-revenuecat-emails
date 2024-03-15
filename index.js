import dotenv from 'dotenv';
import { auth } from 'firebase-admin';

// Initialize the Firebase Admin SDK.
// This SDK is used to authenticate requests to the Firebase Realtime Database.

auth().initializeApp({
  credential: auth.cert(process.env.FIREBASE_SERVICE_ACCOUNT_KEY),
});

dotenv.config();

// Get the RevenueCat API key from the environment variables.
// This key is used to authenticate requests to the RevenueCat API.

const REVENUECAT_API_KEY = process.env.REVENUECAT_API_KEY;

