// React Navigator
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import {
  LoadingScreen,
  MapsScreen,
  PermissionsScreen
} from '../screens';


export type RootStackParams = {
  LoadingScreen: undefined;
  PermissionsScreen: undefined;
  MapsScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      //initialRouteName='LoadingScreen'
      initialRouteName='PermissionsScreen'
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
