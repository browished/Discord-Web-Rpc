const express = require('express');
const Discord = require('discord.js-selfbot-v13');
const path = require('path');
const app = express();

const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

// Load the token and applicationId from config.js
const { token, applicationId } = require('./config.js');

// Middleware to serve static files from /public folder
app.use(express.static('public'));

// Middleware to parse JSON request bodies
app.use(express.json());

client.on('ready', async () => {
  console.log(`${client.user.tag} is ready!`);

  // Set default presence when the bot is ready
  client.user.setActivity('Streaming something cool', {
    type: 'STREAMING',
    url: 'Your default streaming URL',
  });

  client.user.setPresence({ status: 'dnd' });
});

// Endpoint to update status based on user input from the form
app.post('/update-status', (req, res) => {
  const { activityType, details, state, url, largeImage, smallImage } = req.body;

  // Prepare activity options
  const activityOptions = {
    applicationId: applicationId,  // Use applicationId from config.js
    type: activityType.toUpperCase(),
    details: details,
    state: state || undefined,
    url: activityType === 'STREAMING' ? url : undefined, // URL only needed for streaming
    assets: {
      largeImage: largeImage || undefined,
      smallImage: smallImage || undefined,
    }
  };

  // Set the activity without buttons since it's not supported
  client.user.setActivity({
    name: details,
    type: activityType.toUpperCase(),
    url: activityType === 'STREAMING' ? url : undefined,
    state: state || undefined,
    assets: {
      large_image: largeImage || undefined,
      small_image: smallImage || undefined,
    }
  });

  client.user.setPresence({ status: 'dnd' });

  return res.status(200).send('Status updated successfully!');
});

// Start the express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Log in to Discord with the bot token
client.login(token);
