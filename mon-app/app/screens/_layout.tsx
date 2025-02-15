import { Stack, Tabs } from "expo-router";
import IonIcon from '@reacticons/ionicons';
import react from "react";

const TabsLayout = () => {
    return (
        <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            headerTitle:"Acceuil", 
            title:"Accueil",
          }}
        />
        <Tabs.Screen
          name="dashboard"
          options={{
            headerTitle: "Dashboard",
            title:"Dashboard",
            
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            headerTitle: "Explorer",
            title:"Explorer",
          }}
        />
        <Tabs.Screen
          name="paiement"
          options={{
            headerTitle: "Paiements",
            title:"Paiement",
          }}
        />
      </Tabs>

    );
};

export default TabsLayout;