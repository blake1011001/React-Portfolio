import React, { useState } from 'react';
import Navigation from './Navigation';
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './Portfolio';

export default function PortfolioContainer(props) {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Projects') {
            return <Projects />
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header>
                Blake Sanders 
                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            {renderPage()}
        </div>
    );
}