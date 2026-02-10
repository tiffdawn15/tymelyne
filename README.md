# Tymelyne

A cross-platform mobile application for iOS and Android built with React Native and Expo.

## Features

- **Login Screen**: Secure user authentication with email and password
- **Setup Form**: Comprehensive 20-question onboarding form to learn about the user
- **Home Page**: Interactive interface with:
  - Photo upload area
  - AI assistant chat for real-time conversation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo Go app on your mobile device (for testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tiffdawn15/tymelyne.git
cd tymelyne
```

2. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

This will open the Expo Developer Tools in your browser. You can then:

- **For iOS**: Press `i` to open in iOS Simulator (requires macOS with Xcode)
- **For Android**: Press `a` to open in Android Emulator (requires Android Studio)
- **For Web**: Press `w` to open in web browser
- **On Device**: Scan the QR code with the Expo Go app on your phone

### Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator (macOS only)
- `npm run web` - Run in web browser

## Project Structure

```
tymelyne/
├── src/
│   ├── navigation/
│   │   └── AppNavigator.tsx    # Navigation configuration
│   ├── screens/
│   │   ├── LoginScreen.tsx      # Login screen
│   │   ├── SetupFormScreen.tsx  # 20-question setup form
│   │   └── HomeScreen.tsx       # Home page with photo & AI chat
│   └── types/
│       └── index.ts             # TypeScript type definitions
├── App.tsx                      # Main application component
└── package.json                 # Dependencies and scripts
```

## User Flow

1. **Login**: Users enter their email and password to access the app
2. **Setup (First Time)**: New users complete a 20-question profile setup
3. **Home**: Users can:
   - Upload and view photos
   - Chat with an AI assistant
   - Navigate through their personalized experience

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform for React Native
- **TypeScript**: Type-safe JavaScript
- **React Navigation**: Navigation library
- **Expo Image Picker**: Image selection functionality
- **AsyncStorage**: Local data persistence

## License

This project is open source and available under the MIT License.
