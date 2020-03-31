import React from 'react';
import Post from './Post'
import './Home.css'

const response = {
    success: true,
    posts: [{
        id: 1, 
        title: 'titlu',
        image: 'https://images.earthtouchnews.com/media/734888/Baby_bear_2014-11-25.jpg?width=710&height=10000&mode=max&upscale=false',
        description: 'descriere',
        likes: 23
    },
    {
        id: 2, 
        title: 'titlu',
        image: 'https://s3.amazonaws.com/gs-geo-images/0a0d49c0-db68-4bbf-b2ae-d947fdf10cd5.jpg',
        description: 'descriere',
        likes: 23
    },
    {
        id: 3, 
        title: 'titlu',
        image: 'https://i0.wp.com/metro.co.uk/wp-content/uploads/2012/08/article-1345130246729-14914848000005dc-995105_636x356.jpg?quality=90&strip=all&zoom=1&resize=540%2C302&ssl=1',
        description: 'descriere',
        likes: 23
    },
    {
        id: 4, 
        title: 'titlu',
        image: 'https://assets3.thrillist.com/v1/image/2759352/size/tmg-article_tall;jpeg_quality=20.jpg',
        description: 'descriere',
        likes: 23
    },
    {
        id: 5, 
        title: 'titlu',
        image: 'https://cdn4.img.sputniknews.com/images/105547/64/1055476460.jpg',
        description: 'descriere',
        likes: 23
    },
    {
        id: 6, 
        title: 'titlu',
        image: 'https://madmikesamerica.com/wp-content/uploads/2014/05/cute_cub.jpg',
        description: 'descriere',
        likes: 23
    },
    {
        id: 7, 
        title: 'titlu',
        image: 'https://www.superbearblog.com/uploads/cgblog/id31/a.baa-two-little-bears.jpg',
        description: 'descriere',
        likes: 23
    },
    {
        id: 8, 
        title: 'titlu',
        image: 'https://i.redd.it/ccdacafzecg31.jpg',
        description: 'descriere',
        likes: 23
    },
    {
        id: 9, 
        title: 'titlu',
        image: 'https://i.redd.it/qisvlltj4xd21.jpg',
        description: 'descriere',
        likes: 23
    }]
};

 const getMockedPosts = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(response);
    },400);
 })

class Home extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            postsArray: []
        };

        this.onLogOut = this.onLogOut.bind(this);
    }

    getPosts() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('uniqueToken')
            }
        };
        /*
        {
            success: true,
            posts: [{
                id: 1, 
                title: 'titlu',
                image: 'url',
                description: 'descriere',
                likes: 23
            }]
        }
        */

        // fetch('http://192.168.0.155:2222/api/posts', requestOptions)
        // .then(response => response.json())
        getMockedPosts()
        .then(data => {
            console.log(data.posts);
            this.setState({
                postsArray: data.posts
            });
        });
    }

    componentDidMount(){
        // const requestOptions = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'x-access-token': localStorage.getItem('uniqueToken')
        //     }
        // };

        // fetch('http://192.168.0.155:2222/api/user', requestOptions)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     if (data.success === false) {
        //         this.onLogOut();
        //     }
        // });
        this.getPosts();

    }

    onLogOut() {
        localStorage.removeItem('uniqueToken');
        this.props.history.push('/login');
    }

    render() {
        const firstColumn = this.state.postsArray.filter((post, index) => {
             return(index % 3 === 0);
        });
        const secondColumn = this.state.postsArray.filter((post, index) => {
            return(index % 3 === 1);
        });
       const thirdColumn = this.state.postsArray.filter((post, index) => {
        return(index % 3 === 2);
        });
        return (
            <div className="home">
                <h1 className="home-page-title">This is the amazing Home page, enjoy!</h1>
                <div className="container">
                    <div className="all-posts">
                        <div className="first-column">
                        {
                            firstColumn.map((currentPost) => (
                                <Post key={currentPost.id} post={currentPost} />
                            ))
                        }
                        </div>
                        <div className="second-column">
                        {
                            secondColumn.map((currentPost) => (
                                <Post key={currentPost.id} post={currentPost} />
                            ))
                        }
                        </div>
                        <div className="third-column">
                        {
                            thirdColumn.map((currentPost) => (
                                <Post key={currentPost.id} post={currentPost} />
                            ))
                        }
                        </div>
                    </div>
                </div>
                <div className="home-button">
                    <button  onClick={this.onLogOut}>Log out</button>
                </div>
                
            </div>
        )
    }

}

export default Home;