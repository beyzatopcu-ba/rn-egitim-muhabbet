import AsyncStorage from '@react-native-community/async-storage';

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: [
    ],
  },
};

export default REDUX_PERSIST;
