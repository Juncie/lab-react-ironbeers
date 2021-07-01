import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav> 
                <Link to='/'>Home</Link>
                <Link to='/random-beer'>Random Beer</Link>
                <Link to='/make-new-beer'>New Beer</Link>
                <Link to='/all-beers'>Beers</Link>
            </nav>
        </div>
    );
};

export default Home;