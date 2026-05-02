import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kismatkiproperty.app',
  appName: 'Kismat Ki Property', // <--- Isse change karein
  webDir: 'build', 
  server: {
    url: 'https://kismatkiproperty.com', // <--- Ye line add karein
    allowNavigation: ['kismatkiproperty.com']
  }
};

export default config;
