import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';

import { SpotifyScreenProps } from '@stack/rootStack';

const SpotifyScreen = ({ navigation }: SpotifyScreenProps) => {
  const toNext = () => {
    navigation.navigate('CompleteScreen');
  };

  return (
    <SafeAreaView className="flex-1 bg-[#121213]">
      <View className="flex-1 px-5 flex flex-col justify-between">
        <View className="flex flex-col">
          <View className="mb-[58px] pt-[45px]">
            <Text className="text-2xl font-bold text-[#E3E3E8]">Spotify를{'\n'}연동할까요?</Text>
          </View>

          <Image source={require('../../assets/spotify/spotify.gif')} />
        </View>

        <View className="space-y-2">
          <Pressable onPress={toNext} className="bg-[#3E3F44] rounded-full px-4 py-5">
            <Text className="text-white font-semibold text-base text-center">연동하러 가기</Text>
          </Pressable>
          <Pressable onPress={toNext} className="px-4 py-5">
            <Text className="underline font-medium text-[#737373] text-base text-center">
              다음에 할래요
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpotifyScreen;
