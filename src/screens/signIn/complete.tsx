import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';

import { CompleteScreenProps } from '@stack/rootStack';

const CompleteScreen = ({ navigation }: CompleteScreenProps) => {
  const toNext = () => {
    navigation.navigate('SignInScreen');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#121213]">
      <View className="flex-1 px-5 flex flex-col justify-between">
        <View className="flex flex-col">
          <View className="mb-[58px] pt-[45px]">
            <Text className="text-2xl font-bold text-[#E3E3E8]">회원가입이{'\n'}완료되었어요!</Text>
          </View>
        </View>

        <View className="mb-[67px]">
          <Pressable className="bg-[#3E3F44] rounded-full px-4 py-5">
            <Text className="text-white font-semibold text-base text-center">Mook 시작하기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CompleteScreen;
