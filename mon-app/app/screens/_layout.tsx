import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Accueil",
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          headerTitle: "Dashboard",
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="dashboard" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          headerTitle: "Explorer",
          title: "Explorer",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="paiement"
        options={{
          headerTitle: "Paiements",
          title: "Paiement",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="payment" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;