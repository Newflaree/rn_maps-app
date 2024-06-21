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
// Providers
import { PermissionsChecker } from './presentation/providers';


export const MapsApp = () => {
  return (
    <NavigationContainer>
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  );
}
