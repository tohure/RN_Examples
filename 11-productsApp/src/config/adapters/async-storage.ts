import { createAsyncStorage } from '@react-native-async-storage/async-storage';

const storage = createAsyncStorage('appDB');

export class StorageAdapter {
  static async getItem(key: string): Promise<string | null> {
    try {
      const value = await storage.getItem(key);
      return value;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async setItem(key: string, value: string): Promise<void> {
    try {
      await storage.setItem(key, value);
    } catch (error) {
      console.log(error);
      throw new Error(`Error setting item ${key} ${value}`);
    }
  }

  static async removeItem(key: string): Promise<void> {
    try {
      await storage.removeItem(key);
    } catch (error) {
      console.log(error);
      throw new Error(`Error removing item ${key}`);
    }
  }
}
