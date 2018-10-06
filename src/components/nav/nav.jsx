import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import routes from './nav-routes.const';
class Nav extends React.Component {

    render() {
        const navRoutes = routes.map(route => {
            return (
                <NavLink key={route.id} to={route.url} className="nav-link" activeClassName="active">
                    <div className="active-marker"></div>
                    <i className={route.iconClass}></i>{route.label}
                </NavLink>
            )
        });
        return (
            <nav className="nav">
                {navRoutes}
            </nav>
        )
    }
}

export default Nav;