import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: '咨询挂号',
          tabBarIcon: ({ color, focused }) => (
            <Image source={require('../../assets/images/exploreIcon.png')} style={{width: 24, height: 24, tintColor: color, resizeMode: 'contain'}}/>
          ),
        }}
      />

        <Tabs.Screen
            name="user"
            options={{
            title: '我的',
            tabBarIcon: ({ color, focused }) => (
                <Image source={require('../../assets/images/userIcon.png')} style={{width: 24, height: 24, tintColor: color, resizeMode: 'contain'}}/>
            ),
            }}
        />

      
    </Tabs>
  );
}
