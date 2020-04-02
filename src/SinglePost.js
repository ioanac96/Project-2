import React from 'react';
import './SinglePost.css'
import { getPostRequest } from './requests';

const data = {
    success: true,
    post: {
        id: 1, 
        title: 'titlu',
        image: 'https://images.earthtouchnews.com/media/734888/Baby_bear_2014-11-25.jpg?width=710&height=10000&mode=max&upscale=false',
        description: 'descriere',
        likes: 23
    }
};

const getMockedPost = () => new Promise((resolve) => {
    resolve(data);
})

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            error: ''
        }
        this.getPost = this.getPost.bind(this);
    }
    getPost() {
       
        // getMockedPost()
        getPostRequest(this.props.match.params.postId)
        .then(data => {
            if(data.success === false) {
                console.log(data);
                this.setState({
                    error: 'Post not found'
                });
            }
            else {
                this.setState({
                    post: data.post
                });
            }
            
        });
        
    }

    userDidLogOut() {
        const logOut = localStorage.getItem('uniqueToken') === null;
         this.props.history.push('/login');
    }

    componentDidMount() {
        this.getPost();
    }

    render(){
        console.log(this.props.history);
        this.userDidLogOut();
        const {image, title, description, likes} = this.state.post;
        if (this.state.error !== '')
            return (<div>{this.state.error}</div>);

        return (
            <div className="container-for-one-post">
                <div className="single post">
                    <img alt="Something relevant for current post"  src={image} />
                    <div className="header-area">
                        <h2 className="post-title" onClick={this.props.onClick}>{title}</h2>
                        <div className="likes">{likes}</div>
                    </div>
                    <div className="description">{description}</div>
                </div>
            </div>
        );
    }
}

export default SinglePost;