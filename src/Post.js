import React from 'react';

class Post extends React.Component {
    constructor(props){
        super(props);

        this.goToSinglePost = this.goToSinglePost.bind(this);
    }

    goToSinglePost() {
        return  this.props.history.push('/posts/'+this.props.post.id);
    }
    
    render() {
        console.log('aaaaaa',this.props.post.id);
        const {title, image, description, likes} = this.props.post;
        return ( 
            <div className="post">
                <img alt="Something relevant for current post" src={image} />
                <div className="header-area">
                    <h2 className="post-title" onClick={this.goToSinglePost}>{title}</h2>
                    <div className="likes">{likes}</div>
                </div>
                <div className="description">{description}</div>
            </div>
        )
    }
}

export default Post;