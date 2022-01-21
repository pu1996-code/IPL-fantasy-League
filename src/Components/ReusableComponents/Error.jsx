import React from 'react'
import {Link} from 'react-router-dom';
export default function Error() {
    return (
        <div className='mt-5 container p-5'>
            <h3 className='mt-4'>invalid request <Link to="/">return home</Link></h3>
        </div>
    )
}
