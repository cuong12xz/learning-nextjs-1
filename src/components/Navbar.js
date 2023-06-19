import React from 'react';
import Link from 'next/link'
function Navbar({children}) {
    return (
        <>
            <nav>
                <div>
                    <Link href='/'><i>Coder Wikipedia</i></Link>
                </div>
                <div><Link href="/about" ><i>About</i></Link>
                    <Link href="/coders"><i>All Coders</i></Link>
                    </div>
            </nav>
            {children}
        </>
    );
}

export default Navbar;