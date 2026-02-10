# Developer Quick Start Guide

## First Time Setup

1. **Install Node.js and npm**
   ```bash
   # Verify installation
   node --version  # Should be v14 or later
   npm --version
   ```

2. **Clone and Install**
   ```bash
   git clone https://github.com/tiffdawn15/tymelyne.git
   cd tymelyne
   npm install
   ```

3. **Install Expo Go on Your Phone**
   - iOS: Download from App Store
   - Android: Download from Google Play Store

## Running the Application

### Start Development Server
```bash
npm start
```

This opens Expo DevTools with options to:
- Press `i` for iOS Simulator (macOS only)
- Press `a` for Android Emulator
- Press `w` for Web Browser
- Scan QR code with Expo Go app on your phone

### Platform-Specific Commands
```bash
npm run ios       # iOS Simulator (requires macOS + Xcode)
npm run android   # Android Emulator (requires Android Studio)
npm run web       # Web Browser
```

## Development Workflow

### Project Structure
```
src/
├── navigation/      # Navigation configuration
├── screens/         # Screen components
│   ├── LoginScreen.tsx
│   ├── SetupFormScreen.tsx
│   └── HomeScreen.tsx
└── types/          # TypeScript definitions
```

### Making Changes

1. **Edit Code**: Modify files in `src/` directory
2. **Hot Reload**: Changes auto-reload in Expo (shake device or press 'r')
3. **Type Check**: Run `npx tsc --noEmit` to check types
4. **Debug**: Use React Native Debugger or Chrome DevTools

### Testing on Physical Device

1. Start the dev server: `npm start`
2. Open Expo Go app on your phone
3. Scan the QR code displayed in terminal
4. App will load on your device

**Note**: Your phone and computer must be on the same WiFi network

## Common Tasks

### Add New Dependencies
```bash
npm install package-name
```

### Check for Updates
```bash
npx expo-doctor
```

### Clear Cache
```bash
npx expo start -c
```

### Build for Production
```bash
# iOS
npx expo build:ios

# Android
npx expo build:android
```

## Troubleshooting

### Metro Bundler Issues
```bash
# Clear cache and restart
npx expo start -c
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### iOS Simulator Not Working
- Ensure Xcode is installed (macOS only)
- Open Xcode and accept license agreements
- Check that command line tools are configured

### Android Emulator Not Working
- Ensure Android Studio is installed
- Create an AVD (Android Virtual Device)
- Start emulator before running `npm run android`

## Useful Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Code Style

- TypeScript for all new code
- Functional components with hooks
- Use async/await for asynchronous operations
- Follow existing naming conventions
- Add comments for complex logic
- Keep components focused and modular

## Environment

- **React Native**: 0.81.5
- **Expo**: ~54.0.33
- **React**: 19.1.0
- **TypeScript**: ~5.9.2
