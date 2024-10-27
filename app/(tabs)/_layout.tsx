import { Tabs } from 'expo-router';
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.tabContainer}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? styles.activeIconContainer : null}>
                <TabBarIcon
                  name={focused ? 'home-sharp' : 'home-outline'}
                  color={focused ? 'white' : 'gray'}
                  size={focused ? 24 : 24}
                />
              </View>
            ),
          }}
        />

        {/* Schedule Tab */}
        <Tabs.Screen
          name="schedule"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? styles.activeIconContainer : null}>
                <TabBarIcon
                  name={focused ? 'calendar' : 'calendar-outline'}
                  color={focused ? 'white' : 'gray'}
                  size={focused ? 24 : 24}
                />
              </View>
            ),
          }}
        />

        {/* Price List Tab */}
        <Tabs.Screen
          name="priceList"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? styles.activeIconContainer : null}>
                <TabBarIcon
                  name={focused ? 'pricetags' : 'pricetags-outline'}
                  color={focused ? 'white' : 'gray'}
                  size={focused ? 24 : 24}
                />
              </View>
            ),
          }}
        />

        {/* Rules Tab */}
        <Tabs.Screen
          name="rule"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? styles.activeIconContainer : null}>
                <TabBarIcon
                  name={focused ? 'document' : 'document-outline'}
                  color={focused ? 'white' : 'gray'}
                  size={focused ? 24 : 24}
                />
              </View>
            ),
          }}
        />

        {/* <Tabs.Screen
          name="co"
          options={{
            tabBarIcon: ({ color, focused }) => (
              <View style={focused ? styles.activeIconContainer : null}>
                <TabBarIcon
                  name={focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline'}
                  color={focused ? 'white' : 'gray'}
                  size={focused ? 24 : 24}
                />
              </View>
            ),
          }}
        /> */}
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  tabBarStyle: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 10,
    borderRadius: 20,
    borderTopWidth: 0,
    height: 60,
    backgroundColor: '#f4f5f7',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  activeIconContainer: {
    backgroundColor: Colors.light.tint,
    borderRadius: 15,
    padding: 13,
  },
});
