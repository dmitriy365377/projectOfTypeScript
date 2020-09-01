//Core
import React, { FC } from 'react';
import { Provider } from 'react-redux';

// Other
import { store } from './init/store';

import { Starships } from './bus/starships';

const App: FC = () => (
    <Provider store={store}>
        <Starships />
    </Provider>
)

export default App;