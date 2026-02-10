export type RootStackParamList = {
  Login: undefined;
  SetupForm: undefined;
  Home: undefined;
};

export interface Question {
  id: number;
  question: string;
  answer: string;
}

export interface UserProfile {
  email: string;
  answers: Question[];
}
