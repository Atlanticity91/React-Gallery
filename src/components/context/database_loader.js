// === REACT INCLUDES ===
import React, { useContext, useCallback, useEffect } from 'react'

// === INCLUDES ===
import { AboutContext } from './about_wrapper.js'
import { GalleryContext } from './gallery_wrapper.js'
import { NotificationContext } from './notification_wrapper.js'

const DatabaseLoader = ( {children} ) => {

    // === STATE HOOK ===
    const { SetAboutContent } = useContext( AboutContext );
    const { SetGalleryContent } = useContext( GalleryContext );
    const { ShowNotification } = useContext( NotificationContext );

    // === FUNCTIONS ===
    /**
     * ResponseJson function
     * @note : 
     * @param response : 
     **/
    const ResponseJson = useCallback( ( response ) => {
        console.log('Response Status:', response.status);

        if ( !response.ok ) {
            ShowNotification( 'Can\'t access the local database.' );

            return Promise.reject('Network response was not ok');
        }

        return response.json( ).then((data) => {
            console.log('Fetched Data:', data); // Check if data structure is correct
            return data;
        });
    }, [ ShowNotification ] );

    /**
     * ParseJson method
     * @note : Parse database json to about and gallery storage.
     * @param json_data : Query json database content.
     **/
    const ParseJson = useCallback( ( json_data ) => {
        console.log('Parsed JSON Data:', json_data);

        SetAboutContent( json_data[ 'About' ] );
        SetGalleryContent( json_data[ 'Gallery' ] );
    }, [ SetAboutContent, SetGalleryContent ] );

    // === EFFECT HOOKS ===
    /**
     * Effect Hook
     * @note : Load and parse json database.
     **/
    useEffect( ( ) => {
        fetch( '/ressources/db.json' )
            .then( ( response ) => ResponseJson( response ) )
            .then( ( data ) => ParseJson( data ) )
            .catch( ( error ) => ShowNotification( 'Error fetching data : ' + error ) );
    }, [ ResponseJson, ParseJson, ShowNotification ] );

    // === COMPONENT RENDER ===
    return ( <div className="content-wrapper" >{ children }</div> );

};

export default DatabaseLoader;
