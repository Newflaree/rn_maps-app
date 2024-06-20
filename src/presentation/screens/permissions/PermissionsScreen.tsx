// React Native
import {
  Pressable,
  Text,
  View
} from 'react-native';
// Store
import { usePermissionStore } from '../../store/permissions';
// Styles
import { globalStyles } from '../../../config';



export const PermissionsScreen = () => {
  const {
    locationStatus,
    requestLocationPermission
  } = usePermissionStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Habilitar Ubicación</Text>

      <Pressable
        style={ globalStyles.btnPrimary }
        onPress={ requestLocationPermission }
      >
        <Text style={{ color: 'white' }}>Halibitar localización</Text>
      </Pressable>
        
      <Text>Estado actual: { locationStatus }</Text>
    </View>
  );
}
