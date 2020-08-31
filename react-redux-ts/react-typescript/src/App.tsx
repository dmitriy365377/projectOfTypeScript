//Core
import React, { FC } from 'react';
import { Provider } from 'react-redux';

// Other
import {store} from './init/store';

const App: FC = () => (
    <Provider store={store}>
        
    </Provider>
)

export default App;