import React from 'react';
import { addPostRequest } from './requests';

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            title: '',
            description: '',
            likes: 0,

        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    };

    onInputChange(id) {
        return (event) => {
            const newState = {};
            newState[id] = event.target.value;
            this.setState(newState);
        } 
    }

    onAdd() {
        const {title, description, image} = this.state;
        addPostRequest(title, description, image)
        .then(data => {
            console.log(data);
            if (data.success === true) {
                this.props.onAddSuccessful();
            }
        });

    }

    render() {
        const {image} = this.state;

        return (
            <div className="add-new-post-section">
                <div className="title-add-new-post">Add new post:</div>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input  type="text" id="image" className="add-post-image"  placeholder="Add image url" onChange={this.onInputChange('image')} />
                    {
                        image !== '' ? <img alt='' src={image} /> : null
                    }
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" className="add-post-title" placeholder="Title" onChange={this.onInputChange('title')} />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" className="add-post-description" placeholder="Description" onChange={this.onInputChange('description')} />
                </div>
                <div className="add submit">
                    <button onClick={this.onAdd}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddPost;