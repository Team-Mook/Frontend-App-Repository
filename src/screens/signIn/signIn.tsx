import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

import AppleLogo from '@assets/signIn/appleLogo.svg';
import GoogleLogo from '@assets/signIn/googleLogo.svg';
import { SignInScreenProps } from '@stack/rootStack';

const SignInScreen = ({ navigation }: SignInScreenProps) => {
  const toNext = () => {
    navigation.navigate('SpotifyScreen');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#121213]">
      <View className="flex flex-1 flex-col px-5 justify-end">
        <View className="flex flex-col space-y-3 mb-10">
          <Pressable
            onPress={toNext}
            className="flex flex-row items-center space-x-4 justify-center rounded-full bg-white p-3.5"
          >
            <GoogleLogo />
            <Text className="text-base font-medium">Google로 로그인하기</Text>
          </Pressable>
          <Pressable
            onPress={toNext}
            className="flex flex-row items-center space-x-4 justify-center rounded-full bg-white p-3.5"
          >
            <AppleLogo />
            <Text className="text-base font-medium">Apple로 로그인하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
