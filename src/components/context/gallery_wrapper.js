// === REACT INCLUDES ===
import React, { 
    createContext, 
    useState, 
    useMemo,
    useCallback
} from 'react'

/**
 * GalleryContext
 * @note : Create context to store gallery information from the json database.
 **/
export const GalleryContext = createContext( );

/**
 * GalleryDbWrapper component
 * @note : Gallery database content wrapper component.
 **/
const GalleryDbWrapper = ( { children } ) => {

    // === STATE HOOK ===
    const [ gallery, setGalleryDB ] = useState( null )

    // === FUNCTIONS ===
    const SetGalleryContent = useCallback( ( json_data ) => {
        setGalleryDB( { ...gallery, json_data } );
    }, [ gallery, setGalleryDB ] );
    /**
     * GetGallery function
     * @note : Get current gallery content.
     * @return : Return current gallery storage.
     **/
    const GetGallery = useCallback( ( ) => gallery, [ gallery ] );

    // === MEMO HOOKS ===
    const GalleryMemo = useMemo( ( ) => ( { gallery } ), [ gallery ] );

    // === COMPONENT RENDER ===
    return (
        <GalleryContext value={GalleryMemo} >
            { children }
        </GalleryContext>
    );

};

export default GalleryDbWrapper;
