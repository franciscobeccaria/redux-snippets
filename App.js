import { Provider } from 'react-redux';
import store from './redux/store';

import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';

function App() {
    return (
        <Provider store={store}>
            <ComponentOne />
            <ComponentTwo />
        </Provider>
    )
}

export default App
