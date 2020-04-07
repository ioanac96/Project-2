import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { likeRequest } from './requests';

class Post extends React.Component {
    constructor(props){
        super(props);

        this.whatToDo = this.whatToDo.bind(this);
        this.ifLiked = this.ifLiked.bind(this);
    }

    whatToDo(action) {
        return() => {
            if (action === 'goToSinglePost') {
                this.props.history.push('/posts/' + this.props.post.id);
            }
            else if (action === 'like') {
                this.ifLiked();
            }
            else {
                console.log('Do not press here!');
            }
        }
    }

    ifLiked() {
        const value = this.props.post.liked;
        likeRequest(this.props.post.id, !value)
        .then(data => {
            if (data.success === true) {
                this.props.liked();
            }
        })
    }


    
    render() {
        const {title, image, description, likes} = this.props.post;
        return ( 
            <div className="post">
                <img alt="Something relevant for current post" src={image} className="post-image" onClick={this.whatToDo('goToSinglePost')} />
                <div className="header-area">
                    <h2 className="post-title" onClick={this.whatToDo('goToSinglePost')}>{title}</h2>
                    <div className="likes-section" >
                            <FontAwesomeIcon icon={faHeart} className={this.props.post.liked === false ? "not-liked" : "heart"} onClick={this.whatToDo('like')} />
                            <div className="likes" onClick={this.whatToDo('nana')}>{likes}</div>
                    </div>
                </div>
                <div className="description" onClick={this.whatToDo('goToSinglePost')}>{description}</div>
            </div>
        )
    }
}

export default Post;

