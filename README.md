# ue4cheatcreator (Web)
The ultimate web companion for ue4cfgdumper. Transform raw game logs into powerful graphics enhancing cheat codes
<img width="1525" height="819" alt="Screenshot 2025-11-22 at 12-20-39 UE4cheatcreator for NX" src="https://github.com/user-attachments/assets/c110bce7-c1b6-46ba-8d7c-2a0f4519b379" />
<img width="1525" height="819" alt="Screenshot 2025-11-22 at 12-22-30 UE4cheatcreator for NX" src="https://github.com/user-attachments/assets/4f772821-924a-4a7a-8d0c-4b5ec5f01af5" />

**[Try it out here](https://ue4cheatcreator.pages.dev)**

## Features
* **Log Parsing:** Drag & drop `.log` files from `UE4cfgdumper` to instantly analyze available game settings
* **Quick Start:** Generate standard cheats (FPS, Resolution, AA) in one click using the built-in configuration
* **Visual Editor:** Create custom cheat toggles without touching hex code
* **Smart Types:** Toggle between **Hex**, **Float**, and **Integer** views for easy editing
* **Search:** Instantly find specific CVars (e.g. `r.BloomQuality`) among thousands of lines
* **Community Presets:** Browse and load cheat configs created by other users for your specific game
* **Share Your Work:** Save your custom presets to the global database with your author name

## How to Use

### Prerequisites
You need a hacked console with **Atmosphère**.
#### 1. **Dump the Game Config:**
* Download [UE4cfgdumper](https://github.com/masagrator/UE4cfgdumper) (or the enhanced TUI version)
* Run the game on your console
* Run the dumper to generate a `.log` file (usually in `/switch/UE4cfgdumper/`)
#### 2. **Upload to Web Tool:**
* Visit the website
* Drag and drop / select the `.log` file
#### 3. **Create Cheats:**
* **Option A (Fast):** Click **"Generate Default .txt"** to get the standard suite of cheats
* **Option B (Custom):** Click **"Create New"** to open the Editor. Select variables, change values, and save your own options
* **Option C (Community):** Open the **Settings Drawer** (Globe Icon) to load a preset made by someone else

#### 4. **Install:**
* Download the generated `.txt` file
* Place it in your SD card: `/atmosphere/contents/<TitleID>/cheats/<BuildID>.txt`

## Development & Self-Hosting
If you want to run this locally or contribute:
### Clone & Install
```bash

git clone https://github.com/biase-d/ue4cheatcreator.git

cd ue4cheatcreator

npm install

```

### 2. Database Setup (Vercel Postgres)
This project uses **@vercel/postgres**. To run it locally, you need to link it to a Vercel project

1. Install Vercel CLI: `npm i -g vercel`
2. Link Project: `vercel link`
3. Pull Env Vars: `vercel env pull .env.development.local`

**Schema:**
Run these SQL commands in your database console:

```sql

CREATE TABLE IF NOT EXISTS games (

id SERIAL PRIMARY KEY,

title_id VARCHAR(255) NOT NULL UNIQUE,

game_name VARCHAR(255),

generation_count INT DEFAULT 1,

last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

  

CREATE TABLE IF NOT EXISTS presets (

id SERIAL PRIMARY KEY,

game_id INT REFERENCES games(id),

name VARCHAR(255) NOT NULL,

author VARCHAR(255) DEFAULT 'Anonymous',

config_json JSONB NOT NULL,

downloads INT DEFAULT 0,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

```
### 3. Run Local Server

```bash
npm run dev
```
## Special Thanks

This project wouldn't be possible without:
- The tutorials and documentation of UE4 cheats on the switch by Hazerou
- Masagrator for [`UE4cfgdumper`](https://github.com/masagrator/UE4cfgdumper)
- [Unreal Engine 5.1 Console Variables and Commands](https://framedsc.com/GeneralGuides/ue5_commands.htm)

---
*Disclaimer: This tool is for educational and single-player use only. Use responsibly*
