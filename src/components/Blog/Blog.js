import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from '../Blog/NewPost/NewPost';


class Blog extends Component {

    render () {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        {/* Nav link must be used to use inline styleling with activeStyle */}
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
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
                        <Route path="/new-post" component={NewPost} />
                        <Route path="/posts" component={Posts}/>
                    </Switch>
            </div>
        );
    }
}

export default Blog;