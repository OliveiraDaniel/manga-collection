import React from 'react';
import '../styles/Showcase.css'
import Card from 'components/Card'

function Showcase() {
    return (
        <main id="main">
            <div className="container">
                <h1>Coleção</h1>
                <div className="showcase-list">
                    <Card />
                </div>
            </div>
        </main>
    );
}

export default Showcase;