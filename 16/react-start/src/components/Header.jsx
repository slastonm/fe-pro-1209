import React from 'react';
import TextComponent from './TextComponent';
import HeaderNav from './HeaderNav';

function Header() {
    let titleValue = 'Title text';
    let bodyText = '123';
    let isLogin = true;
    return (
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                <span className="fs-4">Pricing example</span>
            </a>

            <HeaderNav login={isLogin}></HeaderNav>
            </div>
            {/* <TextComponent 
            title='About props'
            text='Test 11111111 !!!!!'></TextComponent> */}
            {/* <TextComponent 
            title={titleValue}
            text={bodyText}></TextComponent> */}
            <TextComponent ></TextComponent>
        </header>
    );
}

export default Header;