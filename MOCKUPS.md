# Screen Mockups

## 1. Login Screen

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│          Tymelyne               │
│        Welcome Back             │
│                                 │
│    ┌─────────────────────┐     │
│    │ Email               │     │
│    └─────────────────────┘     │
│                                 │
│    ┌─────────────────────┐     │
│    │ Password            │     │
│    └─────────────────────┘     │
│                                 │
│    ┌─────────────────────┐     │
│    │      Login          │     │
│    └─────────────────────┘     │
│                                 │
│                                 │
└─────────────────────────────────┘
```

**Features:**
- Clean, minimalist design
- Email input with keyboard type optimization
- Password field with secure text entry
- Blue login button
- Form validation with alerts

---

## 2. Setup Form Screen

```
┌─────────────────────────────────┐
│  Setup Profile                  │
│  Question 1 of 20               │
│  ████░░░░░░░░░░░░ (5%)         │
├─────────────────────────────────┤
│                                 │
│  What is your full name?        │
│                                 │
│  ┌─────────────────────────┐   │
│  │ Your answer...          │   │
│  │                         │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│                                 │
│                                 │
├─────────────────────────────────┤
│  ┌──────────┐   ┌──────────┐   │
│  │ Previous │   │   Next   │   │
│  └──────────┘   └──────────┘   │
└─────────────────────────────────┘
```

**Features:**
- Progress bar showing completion percentage
- Question counter (e.g., "Question 1 of 20")
- Large text input area for detailed answers
- Previous/Next navigation buttons
- Complete button on last question
- Answer validation before proceeding

**20 Questions Cover:**
- Personal info (name, age, occupation, location)
- Interests (hobbies, favorites)
- Goals and aspirations
- Lifestyle preferences

---

## 3. Home Screen

```
┌─────────────────────────────────┐
│  Tymelyne                       │
│  Welcome, [Name]!               │
├─────────────────────────────────┤
│                                 │
│  Your Photo                     │
│  ┌─────────────────────────┐   │
│  │                         │   │
│  │   [Photo or Placeholder]│   │
│  │   "Tap to add photo"    │   │
│  │                         │   │
│  └─────────────────────────┘   │
│                                 │
│  AI Assistant                   │
│  ┌─────────────────────────┐   │
│  │ AI: Hello! I'm your AI  │   │
│  │     assistant...        │   │
│  └─────────────────────────┘   │
│                                 │
│      ┌─────────────────────┐   │
│      │ User: Hello there!  │   │
│      └─────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ AI: Hello [Name]! How   │   │
│  │     are you doing?      │   │
│  └─────────────────────────┘   │
│                                 │
├─────────────────────────────────┤
│ ┌───────────────────┐ ┌──────┐ │
│ │ Type a message... │ │ Send │ │
│ └───────────────────┘ └──────┘ │
└─────────────────────────────────┘
```

**Features:**
- Header with app name and personalized greeting
- Photo upload area with:
  - Tap to select from camera roll
  - Image preview when selected
  - Placeholder text when empty
- AI Chat section with:
  - Scrollable message history
  - User messages (right-aligned, blue)
  - AI messages (left-aligned, white)
  - Personalized responses
  - Context-aware conversation
- Message input with:
  - Multi-line text input
  - Send button (disabled when empty)
  - Character limit (500 chars)
  - Auto-scroll to new messages

---

## Color Scheme

- **Primary**: #007AFF (iOS Blue)
- **Background**: #f5f5f5 (Light Gray)
- **Card Background**: #fff (White)
- **Text Primary**: #333 (Dark Gray)
- **Text Secondary**: #666 (Medium Gray)
- **Placeholder**: #999 (Light Gray)
- **Border**: #ddd (Very Light Gray)

---

## Interaction Flow

```
Start
  ↓
Login Screen
  ↓ (Enter credentials)
  ↓
Check Setup Status
  ↓
  ├─→ Not Completed → Setup Form
  │                      ↓ (Answer 20 questions)
  │                      ↓
  └─→ Completed ────────→ Home Screen
                            ↓
                      Use Photo Upload
                            &
                      Chat with AI
```

---

## Responsive Design

All screens are designed to be:
- ✅ Responsive to different screen sizes
- ✅ Keyboard-aware (inputs don't get hidden)
- ✅ Safe area compatible (works with notches)
- ✅ Platform-adaptive (iOS and Android)
- ✅ Touch-friendly (adequate tap targets)

---

## Data Persistence

- **AsyncStorage** stores:
  - User email
  - Setup completion status
  - All 20 question answers
  
- **In-Memory** (not persisted):
  - Chat message history
  - Selected photo (could be added to storage)

---

## Future UI Enhancements

Potential improvements:
- Custom app icons and splash screen
- Dark mode support
- Custom color themes
- Profile avatar
- Photo gallery/carousel
- Chat message timestamps
- Typing indicators
- Message read receipts
- Pull-to-refresh
- Settings screen
