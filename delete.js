require('dotenv').config();
const users = require('./bin/users.json');
// const { initializeApp } = require('firebase-admin/app');
const revenueCatApiKey = process.env.REVENUECAT_API_KEY;
const axios = require('axios');
// const { app } = require('firebase-admin');

users.forEach(getEmail);

async function getEmail (user) {
  
  let app_user_id = user.app_user_id;

  const revenueCatApiKey = process.env.REVENUECAT_API_KEY;
  const revenueCatApiUrl = `https://api.revenuecat.com/v1/subscribers/${app_user_id}`;
  const revenueCatHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${revenueCatApiKey}`,
  };

  const response = axios.delete(revenueCatApiUrl, { headers: revenueCatHeaders })
    .then(response => {
      console.log(`RevenueCat subscriber ${app_user_id} deleted.`);
    })
    .catch(error => {
      console.log(`Error: Unable to delete subscriber ${app_user_id}`, error);
    });
}
