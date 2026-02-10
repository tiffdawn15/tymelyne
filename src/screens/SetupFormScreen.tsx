import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Question } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SetupFormNavigationProp = StackNavigationProp<RootStackParamList, 'SetupForm'>;

interface Props {
  navigation: SetupFormNavigationProp;
}

const QUESTIONS: string[] = [
  "What is your full name?",
  "What is your age?",
  "What is your occupation?",
  "Where do you live?",
  "What are your hobbies?",
  "What is your favorite food?",
  "What is your favorite color?",
  "What is your favorite book?",
  "What is your favorite movie?",
  "What is your favorite music genre?",
  "What are your career goals?",
  "What are your personal goals?",
  "How do you like to spend your free time?",
  "What is your educational background?",
  "Do you have any pets?",
  "What is your favorite season?",
  "What is your dream vacation destination?",
  "What motivates you?",
  "What are your strengths?",
  "What would you like to improve about yourself?",
];

export default function SetupFormScreen({ navigation }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Question[]>(
    QUESTIONS.map((q, index) => ({ id: index + 1, question: q, answer: '' }))
  );

  const handleNext = () => {
    if (!answers[currentQuestion].answer.trim()) {
      Alert.alert('Error', 'Please provide an answer before continuing');
      return;
    }

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleComplete = async () => {
    const unanswered = answers.filter(a => !a.answer.trim());
    if (unanswered.length > 0) {
      Alert.alert(
        'Incomplete',
        `You have ${unanswered.length} unanswered question(s). Please complete all questions.`
      );
      return;
    }

    try {
      await AsyncStorage.setItem('userAnswers', JSON.stringify(answers));
      await AsyncStorage.setItem('setupCompleted', 'true');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Failed to save your answers');
    }
  };

  const updateAnswer = (text: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion].answer = text;
    setAnswers(newAnswers);
  };

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Setup Profile</Text>
        <Text style={styles.progressText}>
          Question {currentQuestion + 1} of {QUESTIONS.length}
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.question}>{QUESTIONS[currentQuestion]}</Text>
        <TextInput
          style={styles.input}
          placeholder="Your answer..."
          value={answers[currentQuestion].answer}
          onChangeText={updateAnswer}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          placeholderTextColor="#999"
        />
      </ScrollView>

      <View style={styles.navigation}>
        {currentQuestion > 0 && (
          <TouchableOpacity style={styles.secondaryButton} onPress={handlePrevious}>
            <Text style={styles.secondaryButtonText}>Previous</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={[styles.primaryButton, currentQuestion === 0 && styles.fullWidth]}
          onPress={handleNext}
        >
          <Text style={styles.primaryButtonText}>
            {currentQuestion === QUESTIONS.length - 1 ? 'Complete' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 3,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    minHeight: 120,
  },
  navigation: {
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginLeft: 10,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullWidth: {
    marginLeft: 0,
  },
});
