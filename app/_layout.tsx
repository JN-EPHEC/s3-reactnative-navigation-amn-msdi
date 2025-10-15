import "react-native-reanimated";





import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseListScreen from './screens/CourseListScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import WishlistScreen from './screens/WishlistScreen';
import ProfileScreen from './screens/ProfileScreen';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

type CoursesStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string; title: string; description: string };
};

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const CoursesStack = createNativeStackNavigator<CoursesStackParamList>();

function CoursesStackNavigator({ navigation }: any) {
  return (
    <CoursesStack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Pressable onPress={() => navigation.getParent()?.openDrawer()} style={{ marginLeft: 12 }}>
            <Ionicons name="menu" size={24} />
          </Pressable>
        ),
      }}
    >
      <CoursesStack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'All Courses' }} />
      <CoursesStack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: 'Course Details' }} />
    </CoursesStack.Navigator>
  );
}

function CoursesTabsNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="All Courses"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'All Courses') return <>�</>;
          if (route.name === 'My Wishlist') return <>⭐</>;
          return null;
        },
        tabBarLabel: route.name,
        headerShown: false,
      })}
    >
      <Tab.Screen name="All Courses" component={CoursesStackNavigator} />
      <Tab.Screen name="My Wishlist" component={WishlistScreen} />
    </Tab.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Drawer.Navigator initialRouteName="Coursess">
      <Drawer.Screen name="Courses" component={CoursesTabsNavigator} options={{ headerShown: false }} />
      <Drawer.Screen name="My Profile" component={ProfileScreen} options={{ headerTitle: 'Profile' }} />
    </Drawer.Navigator>
  );
}
