import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const UI = lazy(() => import('./UI'));

const Project = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    return (
        <Suspense fallback={<div></div>}>
            <Routes>
                <Route path="/" element={<UI />} />
            </Routes>
        </Suspense>
    )
}

export default Project