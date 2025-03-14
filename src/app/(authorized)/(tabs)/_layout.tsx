import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
        tabBarIconStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        },

        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black",
          minHeight: 60,
          // margin: 20,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingHorizontal: 20,
          borderTopWidth: 0.2,
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={32} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Requests"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="people-alt" size={32} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={32} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={32} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
