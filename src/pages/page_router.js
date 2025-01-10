// === REACT INCLUDES ===
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// === INCLUDES ===
import PageAbout from './page_about.js'
import PageAlbum from './page_gallery.js'
import PageGallery from './page_gallery.js'

/**
 * PageRouter component
 * @note : Define routes for navigation system.
 **/
const PageRouter = ( ) => {

    // === COMPONENT RENDER ===
    return (
        <div className="content" >
            <Routes>
                <Route path="/" element={<PageAbout />} />
                <Route path="/albums" element={<PageAlbum />} />
                <Route path="/gallery" element={<PageGallery />} />
            </Routes>
        </div>
    );

};

export default PageRouter;
