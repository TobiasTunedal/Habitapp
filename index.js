import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('habitapp', () => App);

import { Platform } from 'react-native';
import firebase from 'react-native-firebase';

// pluck values from your `GoogleService-Info.plist` you created on the firebase console
const iosConfig = {
  clientId: '332427944364-9nvrr0n7ssft0ce8trnq7ses4n9iock5.apps.googleusercontent.com',
  appId: '1:332427944364:ios:a3a9745feccb524b',
  apiKey: 'AIzaSyCHzLR9gV58-8ZbPpoVKe8n8nS7507eUbo',
  databaseURL: 'https://habitapp-88060.firebaseio.com',
  storageBucket: 'habitapp-88060.appspot.com',
  messagingSenderId: '332427944364',
  projectId: 'habitapp-88060',

  // enable persistence by adding the below flag
  persistence: true,
};

// pluck values from your `google-services.json` file you created on the firebase console
const androidConfig = {
  clientId: '332427944364-uv4cs2uumh7p66jkc5rlo1tkbm6hgs4l.apps.googleusercontent.com',
  appId: '1:332427944364:android:52921cd7e7b85bc3',
  apiKey: 'AIzaSyBTtCPyMd158nKeq1O2-l_a1UXh-05-PQ0',
  databaseURL: 'https://habitapp-88060.firebaseio.com',
  storageBucket: 'habitapp-88060.appspot.com',
  messagingSenderId: '332427944364',
  projectId: 'habitapp-88060',

  // enable persistence by adding the below flag
  persistence: true,
};

const HabitappServer = firebase.initializeApp(
  // use platform specific firebase config
  Platform.OS === 'ios' ? iosConfig : androidConfig,
  // name of this app
  'Habitapp',
);

// dynamically created apps aren't available immediately due to the
// asynchronous nature of react native bridging, therefore you must
// wait for an `onReady` state before calling any modules/methods
// otherwise you will most likely run into `app not initialized` exceptions
HabitappServer.onReady().then((app) => {
   // --- ready ---
   // use `app` arg, HabitappServer var or `app('Habitapp')` to access modules
   // and their methods. e.g:
   firebase.app('Habitapp').auth().signInAnonymously().then((user) => {
       console.log('HabitappServer user ->', user.toJSON());
   });
});