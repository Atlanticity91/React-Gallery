// === CSS INCLUDES ===
import './styles/App.css'
import './styles/global.css'

// === REACT INCLUDES ===
import { BrowserRouter } from 'react-router-dom'

// === INCLUDES ===
import DatabaseWrapper from './components/context/database_wrapper.js'
import Navigation from './components/navigation.js'
import PageRouter from './pages/page_router.js'

/**
 * App component
 * @note : Application encapsulation component.
 **/
function App( ) {

    // { true && <ErrorNotification /> }
    // === COMPONENT RENDER ===
    return (
        <BrowserRouter>
            <DatabaseWrapper>
                <Navigation />
                <PageRouter />
            </DatabaseWrapper>        
        </BrowserRouter>
    );
}

export default App;
