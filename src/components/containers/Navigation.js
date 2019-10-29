import React, { Suspense , useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import routes from '../../routes';
const Navigation = () => {

    return (
        <div className={"text-center nav"}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            <Suspense fallback={'loading()'}>
                <Switch>
                    {routes.map((route, idx) => { console.log(route, idx);
                        return route.component ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                    <route.component {...props} />
                                )} />
                        ) : (null);
                    })}
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </Suspense>
        </div>
    )
}

export default Navigation;