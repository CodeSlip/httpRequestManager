import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import asyncComponent from '../hoc/asyncComponent';
//import NewPost from '../Blog/NewPost/NewPost'; // loading this via lazy loading
// import { Redirect } from 'react-router-dom'; // not loading Redirect

const AsyncNewPost = asyncComponent(() => {
    return import('../Blog/NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth : true
    }
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        {/* Nav link must be used to use inline styleling with activeStyle */}
                        <ul>
                            <li><NavLink 
                            to="/posts" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Posts</NavLink></li>
                            <li><NavLink to={{ 
                                pathname: "/new-post"}} exact>New Posts</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home</h1>}/> */}
                    <Switch>        
                        {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                        <Route path="/posts" component={Posts}/>
                        <Route render={() => <h1>Not Found</h1>}/> 
                        {/* <Redirect from="/" to="/posts" /> */}
                        {/* This is a catch all route and can be used with a 404 error page */}
                    </Switch>
            </div>
        );
    }
}

export default Blog;