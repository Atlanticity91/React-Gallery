// === REACT INCLUDES ===
import React from 'react'

// === INCLUDES ===
import AboutDbWrapper from './about_wrapper.js'
import GalleryDbWrapper from './gallery_wrapper.js'
import NotificationDbWrapper from './notification_wrapper.js'
import DatabaseLoader from './database_loader.js'

/**
 * DatabaseWrapper component
 * @note : Database wrapper component.
 **/
const DatabaseWrapper = ( { children } ) => {

    // === COMPONENT RENDER ===
    return ( 
        <AboutDbWrapper> 
            <GalleryDbWrapper>
                <NotificationDbWrapper>
                    <DatabaseLoader>
                        { children }
                    </DatabaseLoader>
                </NotificationDbWrapper>
            </GalleryDbWrapper>
        </AboutDbWrapper> 
    );

};

export default DatabaseWrapper;
