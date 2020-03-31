import React from 'react';

class Post extends React.Component {
    
    render() {
        const {title, image, description, likes} = this.props.post;
        return ( 
            <div className="post">
                <img alt="Something relevant for current post" src={image} />
                <div className="header-area">
                    <h2 className="post-title">{title}</h2>
                    <div className="likes">{likes}</div>
                </div>
                <div className="description">{description}</div>
            </div>
        )
    }
}

export default Post;