import React from 'react';
import './SinglePost.css'
import { getPostRequest, getUserRequest, likeRequest } from './requests';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ImageGallery from 'react-image-gallery';

const images = [
    {
      original: 'https://animalogic.ca/wp-content/uploads/2018/05/shutterstock_481623085.jpg',
      thumbnail: 'https://animalogic.ca/wp-content/uploads/2018/05/shutterstock_481623085.jpg',
    },
    {
      original: 'https://previews.123rf.com/images/foottoo/foottoo1706/foottoo170600933/80253466-cow-at-a-meadow-austria.jpg',
      thumbnail: 'https://previews.123rf.com/images/foottoo/foottoo1706/foottoo170600933/80253466-cow-at-a-meadow-austria.jpg',
    },
    {
      original: 'https://miro.medium.com/max/6528/1*-4y76__mIZjL4IRrESEbuA.jpeg',
      thumbnail: 'https://miro.medium.com/max/6528/1*-4y76__mIZjL4IRrESEbuA.jpeg',
    },
    {
        original: 'https://i.pinimg.com/originals/71/3e/85/713e8511c2cbaebf58d2870aff5260a6.jpg',
        thumbnail: 'https://i.pinimg.com/originals/71/3e/85/713e8511c2cbaebf58d2870aff5260a6.jpg',
    },
    {
        original: 'https://assets.change.org/photos/7/yk/ho/ghykhOwaTaYYwER-800x450-noPad.jpg?1528391927',
        thumbnail: 'https://assets.change.org/photos/7/yk/ho/ghykhOwaTaYYwER-800x450-noPad.jpg?1528391927',
    },
  ];


// const data = {
//     success: true,
//     post: {
//         id: 1, 
//         title: 'titlu',
//         image: 'https://images.earthtouchnews.com/media/734888/Baby_bear_2014-11-25.jpg?width=710&height=10000&mode=max&upscale=false',
//         description: 'descriere',
//         likes: 23
//     }
// };

// const getMockedPost = () => new Promise((resolve) => {
//     resolve(data);
// })

class SinglePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            error: ''
        }
        this.getPost = this.getPost.bind(this);
        this.onBack = this.onBack.bind(this);
        this.whatToDo = this.whatToDo.bind(this);
    }
    getPost() {
       
        // getMockedPost()
        getPostRequest(this.props.match.params.postId)
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
        getUserRequest().then(data => {
            if (data.success === true) {
                this.getPost();
            }
            else {
                this.props.history.push('/login');
                localStorage.removeItem('uniqueToken');
            }
        });
        
    }

    onBack() {
        this.props.history.push('/posts');
    }

    whatToDo(action) {
        return() => {
            if (action === 'like') {
                const postId = this.props.match.params.postId;
                const value = this.state.post.liked;
                likeRequest(postId, !value)
                .then(data => {
                    console.log(data);
                    if (data.success === true) {
                        this.getPost();
                    }
                })
            }
            else {
                console.log('Do not press here!');
            }
        }
    }

    render(){
        const {image, title, description, likes} = this.state.post;
        if (this.state.error !== '')
            return (<div>{this.state.error}</div>);

        return (
            <div className="container-for-one-post">
                <button className="back-button" onClick={this.onBack}>Back</button>
                <div className="single post">
                    <img alt="Something relevant for current post" className="single-image"  src={image} />
                    <div className="header-area">
                        <h2 className="post-title">{title}</h2>
                        <div className="likes-section">
                            <FontAwesomeIcon icon={faHeart} className={this.state.post.liked === false ? "not-liked" : "heart"} onClick={this.whatToDo('like')} />
                            <div className="likes" onClick={this.whatToDo('nana')}>{likes}</div>
                        </div>
                        
                    </div>
                    <div className="description">{description}</div>
                    <div>
                        <ImageGallery items={images} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePost;