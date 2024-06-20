// React Navigator
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  LoadingScreen,
  MapsScreen,
  PermissionsScreen
} from '../screens';


const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='LoadingScreen'
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="LoadingScreen" component={ LoadingScreen } />
      <Stack.Screen name="MapsScreen" component={ MapsScreen } />
      <Stack.Screen name="PermissionsScreen" component={ PermissionsScreen } />
    </Stack.Navigator>
  );
}
