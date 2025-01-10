// === REACT INCLUDES ===
import React, { 
    createContext, 
    useState, 
    useMemo,
    useCallback
} from 'react'

export const NotificationContext = createContext( );

/**
 * NotificationDbWrapper component
 * @note : Database wrapper component, store bdd and bdd access function.
 **/
const NotificationDbWrapper = ( { children } ) => {

    // === STATE HOOK ===
    const [ notification, setNotification ] = useState( "" );

    // === FUNCTIONS ===
    /**
     * ShowNotification method
     * @note : Display notification to the header of the page.
     * @param message : Query notification message.
     **/
    const ShowNotification = useCallback( ( message ) => {
        setNotification( { ...notification, message } );
    }, [ notification, setNotification ] );

    /**
     * GetNotification function
     * @note : Get current notification content.
     * @return : Return current notification storage.
     **/
    const GetNotification = useCallback( ( ) => notification, [ notification ] );

    // === MEMO HOOKS ===
    const NotificationMemo = useMemo( ( ) => ( { 
        notification,
        ShowNotification
    } ), [ 
        notification,
        ShowNotification
    ] );

    // === COMPONENT RENDER ===
    return (
        <NotificationContext value={NotificationMemo} >
            { children }
        </NotificationContext>
    );

};

export default NotificationDbWrapper;
