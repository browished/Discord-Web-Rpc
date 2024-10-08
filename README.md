# Discord RPC Maker

## Description

Discord RPC Maker is a simple web application that allows users to set custom Rich Presence statuses on Discord. The app features a user-friendly interface for selecting activity types, entering details, and adding images to enhance the status display. A visually appealing loading screen plays a video before the main application content loads.

## Features

- **Rich Presence Activities**: Supports various activity types, including Streaming, Playing, Listening, and Watching.
- **Customizable Status**: Users can customize the status with details, state, and URLs.
- **Loading Screen**: A stylish loading screen with an MP4 video plays before the application loads.
- **User -friendly Interface**: The interface is designed to be intuitive and easy to use.

## Technologies Used

- **Node.js**: The backend is built using Express.js to handle HTTP requests.
- **Discord.js (Selfbot)**: Utilizes the Discord.js library to interact with Discord's API.
- **HTML/CSS**: The frontend is built with HTML and styled with CSS for a modern look.
- **JavaScript**: Used for client-side interactions and fetching data from the server.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)

### Steps to Install

1. Clone the repository:

git clone https://github.com/browished/Discord-Web-Rpc.git
cd discord-rpc-maker

2. Install dependencies:

npm install

3. Create a configuration file:

Create a file named config.js in the root directory of the project and add your Discord token and application ID:

module.exports = {
  token: 'YOUR_DISCORD_TOKEN',
  applicationId: 'YOUR_APPLICATION_ID',
};

4. Run the application:

npm start

5. Open your browser:

Go to http://localhost:3000 to access the application.

## Usage

1. Select the desired activity type from the dropdown menu.
2. Enter the activity details and state (optional).
3. Provide the streaming URL (if applicable) and image URLs (optional).
4. Click the Update Status button to set your Rich Presence on Discord.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:

git checkout -b feature-branch

3. Make your changes and commit them:

git commit -m 'Add some feature'

4. Push to the branch:

git push origin feature-branch

5. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Discord.js - The library used for interacting with the Discord API.
- Express.js - The web framework for Node.js.
- Thanks to everyone who contributed to the project!

## Contact

For any questions or feedback, please contact me at:

Devrock
Email: devrockk14@gmail.com
GitHub: browished/devrock07
