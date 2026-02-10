# Tymelyne - Mobile Application Features

## Overview
This mobile application is designed for both iOS and Android platforms, providing a seamless cross-platform experience.

## Application Flow

### 1. Login Screen
- **Purpose**: User authentication
- **Features**:
  - Email input field with validation
  - Password input field (secure entry)
  - Form validation (email format, empty fields)
  - Automatic navigation to Setup Form (first time) or Home (returning user)
- **Data Storage**: Stores user email in AsyncStorage

### 2. Setup Form (20 Questions)
- **Purpose**: Collect comprehensive user profile information
- **Features**:
  - 20 pre-defined questions covering:
    - Personal information (name, age, occupation, location)
    - Preferences (food, color, books, movies, music)
    - Goals (career, personal)
    - Lifestyle (hobbies, free time activities, pets)
    - Aspirations (dream vacation, strengths, areas for improvement)
  - Progress indicator showing current question number and percentage
  - Previous/Next navigation buttons
  - Answer validation (ensures all questions are answered)
  - Multi-line text input for detailed responses
- **Data Storage**: Saves all answers to AsyncStorage for persistence

### 3. Home Page
- **Purpose**: Main interactive hub
- **Features**:
  
  **Photo Area:**
  - Tap to select/upload photos from device library
  - Permission handling for camera roll access
  - Image preview with 4:3 aspect ratio
  - Visual placeholder when no image is selected
  
  **AI Chat Assistant:**
  - Real-time chat interface
  - Personalized greetings using user's name
  - Context-aware responses
  - Message history display
  - User messages (right-aligned, blue background)
  - AI messages (left-aligned, white background with border)
  - Scrollable conversation view
  - Multi-line text input with character limit (500 characters)
  - Send button with disabled state when input is empty
  - Auto-scroll to latest message

## Technical Implementation

### Architecture
- **Framework**: React Native with Expo
- **Language**: TypeScript for type safety
- **Navigation**: React Navigation (Stack Navigator)
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Data Persistence**: AsyncStorage
- **Image Handling**: Expo Image Picker

### Key Components

#### Type Definitions (`src/types/index.ts`)
- RootStackParamList: Navigation parameter types
- Question: Structure for setup form questions
- UserProfile: User data structure

#### Screens
1. `LoginScreen.tsx`: Authentication interface
2. `SetupFormScreen.tsx`: Multi-question onboarding
3. `HomeScreen.tsx`: Photo upload and AI chat

#### Navigation
- `AppNavigator.tsx`: Central navigation configuration
- Screens: Login → SetupForm → Home
- No headers (custom UI for each screen)

### Responsive Design
- Keyboard avoiding views for input fields
- Platform-specific adjustments (iOS vs Android)
- Safe area context for device notches
- Flexible layouts that adapt to different screen sizes

### User Experience Features
- Form validation with user-friendly error messages
- Progress tracking in setup form
- Smooth animations and transitions
- Intuitive navigation flow
- Persistent data storage
- Real-time chat interface
- Auto-scrolling chat messages

## Future Enhancements
Potential areas for expansion:
- Real AI integration (OpenAI, Anthropic, etc.)
- User profile editing
- Photo gallery
- Push notifications
- Social features
- Data export/backup
- Custom themes
- Multi-language support
- Offline mode with sync

## Development Notes
- All dependencies are compatible versions
- TypeScript strict mode enabled
- No security vulnerabilities in dependencies
- Follows React Native best practices
- Modular component structure for maintainability
