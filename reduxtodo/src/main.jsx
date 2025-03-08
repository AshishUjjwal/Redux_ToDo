import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
// store={store} is passed to Provider 
// so that useSelector() and useDispatch() 
// can interact with the Redux state.


// ReactDOM.createRoot is a method introduced in React 18 to enable the new Concurrent Mode, improving performance and responsiveness.
