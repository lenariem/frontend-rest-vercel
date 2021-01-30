import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import cartIcon from './shopping-cart-solid.svg'
import homeIcon from './home.svg'
import mailIcon from './email.svg'
import logo from './logo.png'

import './app-header.scss'

const AppHeader = ({totalPrice}) => {
    return (
        <>
        <header className="header">
            <Link to = {'/'} className="header__link first" title="home page">
                <img className="header__logo" src={logo} alt="logo"></img>
            </Link>
            <Link to = {'/'} className="header__link">Home</Link>
            <Link to = {'/menu'} className="header__link">Menu</Link>
            <Link to = "/cart" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {totalPrice}$
            </Link>
            <Link to = {'/orders'} className="header__link">Orders</Link>
            <Link to = {'/contact'} className="header__link">Contact us	<img className="header__mail" src={mailIcon} alt="contact us"></img></Link>
        </header>

        <nav className="header__mobile">
            <Link to = {'/'} className="header__link"><img className="header__cart" src={homeIcon} alt="home"></img></Link>
            <Link to = {'/menu'} className="header__link">Menu</Link>
            <Link to = "/cart" className="header__link">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                {totalPrice}$
            </Link>
            <Link to = {'/orders'} className="header__link">Order</Link>
            <Link to = {'/contact'} className="header__link"><img className="header__mail" src={mailIcon} alt="contact us"></img></Link>
        </nav>

        </>
    )
}

const mapStateToProps = ({totalPrice}) => {
    return {
        totalPrice
    }
}

export default connect(mapStateToProps)(AppHeader)