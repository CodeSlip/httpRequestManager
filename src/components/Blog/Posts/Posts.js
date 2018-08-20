import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    
    state= {
        posts: []
    }

    postSelectededHandler = ( id ) => {
        // this.props.history.push({pathname: '/' + id});
        this.props.history.push('/posts/' + id);
        // this.setState({selectedPostId: id});
    }

    componentDidMount () {
        // console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Max"
                    };
                });
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log(error);
                this.setState({error: true});
            });
    }

    render () {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                // <Link to={'/'+ post.id} >
                    <Post 
                    key={post.id}
                    clicked={ () => this.postSelectededHandler(post.id)}
                    title={post.title} 
                    author={post.author}/>
               // {/* </Link> */}
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} component={FullPost} />
            </div>
        );
    }
}

export default Posts;