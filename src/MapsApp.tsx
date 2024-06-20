import 'react-native-gesture-handler';
// React Native
import {
  Text,
  View
} from 'react-native';
// React Navigation
import { NavigationContainer } from '@react-navigation/native';
// Navigation
import { StackNavigator } from './presentation/navigation';


export const MapsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
