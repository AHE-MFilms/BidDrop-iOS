import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.biddrop.app',
  appName: 'BidDrop',
  webDir: 'www',
  server: {
    url: 'https://biddrop.us',
    cleartext: false,
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#0d1b2e',
    limitsNavigationsToAppBoundDomains: true,
    scrollEnabled: true,
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      launchAutoHide: true,
      backgroundColor: '#0d1b2e',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
  },
};

export default config;
