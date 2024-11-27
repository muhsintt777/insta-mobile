import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { APP_ROUTES } from '../configs/constants/app-routes';
import { LoginScreen } from '../features/auth/login-screen';
import { SignupScreen } from '../features/auth/Signup-screen';
import { HomeScreen } from '../features/home/home-screen';

const NativeStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name={APP_ROUTES.LOGIN} component={LoginScreen} />
      <NativeStack.Screen name={APP_ROUTES.SIGNUP} component={SignupScreen} />
    </NativeStack.Navigator>
  );
}

function TestScreen() {
  return (
    <View>
      <Text>Test</Text>
    </View>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={APP_ROUTES.HOME} component={HomeScreen} />
      <BottomTab.Screen name={APP_ROUTES.TEST} component={TestScreen} />
    </BottomTab.Navigator>
  );
}

export const Router = () => {
  const user = 1;
  return (
    <NavigationContainer>
      <NativeStack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <NativeStack.Screen
            name={APP_ROUTES.MAIN}
            component={BottomTabNavigator}
          />
        ) : (
          <NativeStack.Screen
            name={APP_ROUTES.AUTH}
            component={AuthNavigator}
          />
        )}
      </NativeStack.Navigator>
    </NavigationContainer>
  );
};
