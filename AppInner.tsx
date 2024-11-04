import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '@stack/rootStack';
import SignInScreen from 'src/screens/signIn/signIn';
import SpotifyScreen from 'src/screens/spotify/spotify';
import CompleteScreen from 'src/screens/signIn/complete';

const rootStack = createNativeStackNavigator<RootStackParamList>();

function AppInner() {
  return (
    <GestureHandlerRootView>
      <rootStack.Navigator screenOptions={{ headerShown: false }}>
        <rootStack.Screen name="SignInScreen" component={SignInScreen} />
        <rootStack.Screen name="SpotifyScreen" component={SpotifyScreen} />
        <rootStack.Screen name="CompleteScreen" component={CompleteScreen} />
      </rootStack.Navigator>
    </GestureHandlerRootView>
  );
}

export default AppInner;
