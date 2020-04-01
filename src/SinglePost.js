import React from 'react';
import './SinglePost.css'

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
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('uniqueToken')
            }
        };
        // fetch('http://192.168.0.174:2222/api/posts/'+this.props.match.params.postId, requestOptions)
        // .then(response => response.json())
        getMockedPost()
        .then(data => {
            if(data.success === false) {
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

    componentDidMount() {
        this.getPost();
    }

    render(){
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