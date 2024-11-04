import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  SignInScreen: undefined;
  SpotifyScreen: undefined;
};

// 로그인 화면
export type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignInScreen'>;

// Spotify 연동 화면
export type SpotifyScreenProps = NativeStackScreenProps<RootStackParamList, 'SpotifyScreen'>;
