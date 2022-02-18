import React from 'react';
import { Spinner } from 'reactstrap';

function Loder(props) {
    return (
        <div className='text-center mb-5'>
            <Spinner color='info'/>
        </div>
    );
}

export default Loder;