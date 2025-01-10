// === REACT INCLUDES ===
import React, { 
    createContext, 
    useState, 
    useMemo,
    useCallback
} from 'react'

/**
 * AboutContext
 * @note : Create context to store about information from the json database.
 **/
export const AboutContext = createContext( );

/**
 * AboutDbWrapper component
 * @note : About database content wrapper component.
 **/
const AboutDbWrapper = ( { children } ) => {

    // === STATE HOOK ===
    const [ about, setAboutDb ] = useState( null );

    // === FUNCTIONS ===
    const SetAboutContent = useCallback( ( json_data ) => {
        setAboutDb( { ...about, json_data } );
    }, [ about, setAboutDb ] );
    /**
     * GetAbout function
     * @note : Get current about content.
     * @return : Return current about storage.
     **/
    const GetAbout = useCallback( ( ) => about, [ about ] );

    // === MEMO HOOKS ===
    const AboutMemo = useMemo( ( ) => ( { about } ), [ about ] );

    // === COMPONENT RENDER ===
    return (
        <AboutContext value={AboutMemo} >
            { children }
        </AboutContext>
    );

};

export default AboutDbWrapper;
