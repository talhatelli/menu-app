# Menu Marvel - React Native Restaurant Menu App

Menu Marvel is a mobile application built with React Native and Expo, designed to provide a seamless restaurant menu browsing experience.

## 🍽️ Features

- 📢 Welcome screen with an engaging introduction
- 📂 Browse menu items by categories
- 📸 Detailed view of menu items with images and descriptions
- 🔍 Search functionality for quick menu item lookup
- 🔄 Real-time menu updates
- 🎨 Clean and intuitive user interface

## 🚀 Technologies Used

- ⚛️ React Native
- 🚀 Expo
- 🔄 React Navigation
- 🗂️ Redux & Redux Thunk
- 🎨 React Native Vector Icons

## 📱 Screens

- **Welcome Screen**: Initial landing page with app introduction
- **Menu Item List**: Main screen showing categories and featured items
- **Category Detail**: Shows all items within a selected category
- **Menu Item Detail**: Detailed view of a specific menu item

## 🛠️ Installation

### 1️⃣ Clone the repository:
```sh
git clone https://github.com/talhatelli/menu-app.git
```

### 2️⃣ Install dependencies:
```sh
npm install
```

### 3️⃣ Start the development server:
```sh
npm start
# or
expo start
```

## 🔧 Environment Setup

1. Make sure you have Node.js installed.
2. Install Expo CLI globally:
   ```sh
   npm install -g expo-cli
   ```
3. Configure your backend URL in `src/Requests.js`:
   ```javascript
   BASE_URL = "http://localhost:3000";
   ```

## 📱 Running the App

- **iOS**: `npm run ios`
- **Android**: `npm run android`
- **Web**: `npm run web`

You can also run the app on your physical device by scanning the QR code with the Expo Go app.

### Running on iPhone:
1. Install Expo Go app from App Store.
2. Ensure your phone and computer are on the same WiFi network.
3. Run `npm start` in the project directory.
4. Scan the QR code with your iPhone camera.
5. The app will open in Expo Go.

## 🌐 API Integration

The app connects to a REST API with the following endpoints:

- `GET /categories/app` - Retrieve all categories
- `GET /categories/:id/items` - Retrieve items by category
- `GET /menu-items/app` - Retrieve all menu items
- `GET /menu-items/:id` - Retrieve specific menu item details

## 🎨 Color Scheme

```javascript
const colors = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626"
};
```

## 📝 Project Structure

```
src/
├── components/
├── navigation/
│   └── AppNavigator.js
├── screens/
│   ├── WelcomeScreen.js
│   ├── MenuItemList.js
│   ├── CategoryDetail.js
│   └── MenuItemDetail.js
└── Requests.js
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a pull request or issue on the repository.

## 📄 License

This project is licensed under the MIT License.

## 📸 Screenshots

![Simulator Screenshot - iPhone 16 - 2025-02-13 at 12 31 35](https://github.com/user-attachments/assets/6db76b59-e94a-442a-8577-c97da3f33ca9)
![Simulator Screenshot - iPhone 16 - 2025-02-13 at 12 36 41](https://github.com/user-attachments/assets/4b639893-d16f-4d8e-98ac-53a68d43e973)
![Simulator Screenshot - iPhone 16 - 2025-02-13 at 12 36 46](https://github.com/user-attachments/assets/4bb6e774-20e3-4223-9654-7bd23bcdae8e)
![Simulator Screenshot - iPhone 16 - 2025-02-13 at 12 36 50](https://github.com/user-attachments/assets/49954124-4b39-41b6-8870-479bed603869)
![Simulator Screenshot - iPhone 16 - 2025-02-13 at 12 37 00](https://github.com/user-attachments/assets/0f017297-b89c-49d3-a1ad-af6fe7ebf1c4)

