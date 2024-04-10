export interface StorageType {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const storage = (): StorageType => {
  return {
    getItem(key: string) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    },
    setItem(key: string, value: string) {
      return localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key: string) {
      return localStorage.removeItem(key);
    },
  };
};
