// Zustand
import { create } from 'zustand';
// Actions
import {
  checkLocationPermission,
  requestLocationPermission
} from '../../../actions/permissions';
// Interfaces
import type { PermissionStatus } from '../../../infrastructure/interfaces';


interface PermissionState {
  locationStatus: PermissionStatus;

  requestLocationPermission: () => Promise<PermissionStatus>;
  checkLocationPermission: () => Promise<PermissionStatus>;
}


export const usePermissionStore = create<PermissionState>()( set => ({
  locationStatus: 'undetermined',
  requestLocationPermission: async () => {
    const status = await requestLocationPermission();

    set({ locationStatus: status })

    return status;
  },
  checkLocationPermission: async () => {
    const status = await checkLocationPermission();

    set({ locationStatus: status })

    return status;
  },
}));
