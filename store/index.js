import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
// import { persistStore, autoRehydrate } from 'redux-persist';
// import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


// create store in case we want to use redux persist
/*
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);
*/

// persistStore(store, { storage: AsyncStorage, whitelist: ['likedJobs'] });

export default store;
