import Link from 'next/link';
import React from 'react';

const Navbar = () => {


  

    return (
        <div className=' flex gap-5 justify-center'>
            <Link href={'/'}>
                Home
            </Link>
            <Link href={'/about'}>
                About Us
            </Link>
            <Link href={'/posts'}>
                Post
            </Link>
        </div>
    );
};

export default Navbar;