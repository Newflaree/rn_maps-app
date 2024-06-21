// React
import {
  PropsWithChildren,
  useEffect
} from 'react';
// React Native
import {
  AppState,
  Text,
  View
} from 'react-native';
// React Nativation
import {
  NavigationProp,
  useNavigation
} from '@react-navigation/native';
// Navigation
import { RootStackParams } from '../navigation';
// Store
import { usePermissionStore } from '../store/permissions';


export const PermissionsChecker = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect( () => {
    if ( locationStatus === 'granted' ) {
      navigation.navigate( 'MapsScreen' );
    } else if ( locationStatus !== 'undetermined' ) {
      navigation.navigate( 'PermissionsScreen' );
    }
  }, [ locationStatus ] );

  useEffect( () => {
    checkLocationPermission();
  }, [] );

  useEffect( () => {
    const subscription = AppState.addEventListener( 'change', ( nextAppState ) => {
      if ( nextAppState === 'active' ) {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    }
  }, [] );

  return (
    <>{ children }</>
  );
}
