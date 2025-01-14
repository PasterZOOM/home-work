import React from 'react'
import {Routes, Route} from 'react-router-dom'
import PreJunior from './pages/PreJunior';
import Error404 from './pages/Error404';
import Junior from '../h7/Junior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    SENIOR: '/senior',
}

export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<PreJunior/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default Pages
