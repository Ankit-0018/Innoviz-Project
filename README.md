# 🧠 Saitm Foods Chatbot Webhook

This is the backend webhook server built using **Express.js** for a smart food-ordering chatbot using **Dialogflow**. The bot can:

- 🛒 Order delicious food  
- 📦 Track your order  
- 🎉 Plan a celebration  
- 🍽️ Browse the menu  
- 💬 Leave feedback or suggestions

---

## 🚀 Features

- Built with **Node.js + Express**
- Receives and handles Dialogflow POST requests
- Sends custom responses based on intent
- Supports rich content like **images and buttons**
- Handles **date and time formatting** (for celebration bookings)

---

## 🏗️ Folder Structure

All code is currently inside a **single file**. However, here's a recommended future structure if you want to modularize:


---

## 🛠️ How to Run

### 1. Clone the Repo
```bash
git clone https://github.com/Ankit-0018/Innoviz-Project.git
cd Innoviz-Project

### 2. Install Dependencies

npm install

### 3. Start the Server

npm server.js

The server will run on:
http://localhost:3000

📡 Connecting to Dialogflow
Go to Dialogflow Console

Open your agent → Navigate to Fulfillment

Enable Webhook

Set the webhook URL to: https://your-server-domain.com/

Make sure your intents have Webhook enabled

💬 Supported Intents
🎉 book-celebration
Handles celebration booking and formats date/time to Asia/Kolkata timezone.

📦 track-order
Tracks order using order ID provided by user.

🍽️ menu
Sends a rich response with an image of the menu and a button to view full PDF.

🧑‍💻 Author
Made with ❤️ by Ankit

Feel free to star ⭐ the repo or raise issues if you want to contribute!


---

Let me know if you want to include screenshots of chatbot responses or any further convenience.

