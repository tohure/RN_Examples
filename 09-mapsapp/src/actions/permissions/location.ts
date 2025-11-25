import {
  check,
  openSettings,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';
import type { PermissionsStatus } from '../../infraestructure/interfaces/permissions';
import { Platform } from 'react-native';

export const requestLocationPermission =
  async (): Promise<PermissionsStatus> => {
    let status: PermissionStatus = 'unavailable';

    if (Platform.OS === 'ios') {
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Unsupported platform');
    }

    if (status === 'blocked') {
      await openSettings();
      return await checkLocationPermission();
    }

    const permissionsMapper: Record<PermissionStatus, PermissionsStatus> = {
      granted: 'granted',
      denied: 'denied',
      blocked: 'blocked',
      limited: 'limited',
      unavailable: 'unavailable',
    };

    return permissionsMapper[status] ?? 'unavailable';
  };

export const checkLocationPermission = async (): Promise<PermissionsStatus> => {
  let status: PermissionStatus = 'unavailable';

  if (Platform.OS === 'ios') {
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Unsupported platform');
  }

  const permissionsMapper: Record<PermissionStatus, PermissionsStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'blocked',
    limited: 'limited',
    unavailable: 'unavailable',
  };

  return permissionsMapper[status] ?? 'unavailable';
};
