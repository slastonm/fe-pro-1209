import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// HeaderNav.propTypes = {
    
// };

function HeaderNav(props) {
    let links = [
        {
            value:'Features',
            link:'test-link'
        },
        {
            value:'Enterprise',
            link:'test-link2'
        },
        {
            value:'Support',
            link:'test-link3'
        },
        {
            value:'Pricing',
            link:'test-link4'
        }
    ];
    let testHRM = 'test';
    let linksEl = links.map((item, index)=>{
        return  <a key={index} className="me-3 py-2 link-body-emphasis text-decoration-none" href={item.link}>{item.value}</a>
    })
    if(props.login){
        return (
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                {/* <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Features</a>
                <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Enterprise</a>
                <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="#">Support</a>
                <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a> */}
                {/* {linksEl} */}
                <Link className="me-3 py-2 text-dark text-decoration-none" to='/'>Home</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none" to='/about'>About</Link>
                <Link className="me-3 py-2 text-dark text-decoration-none"  to='/test'>Test</Link>
            </nav>
        );        
    }
    else{
        return(
            <>
                <button>
                    Login
                </button>
            </>
        )
    }

}

export default HeaderNav;