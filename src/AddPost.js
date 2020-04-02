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
        console.log('my state', this.state);
        const {image} = this.state;

        return (
            <div className="add-new-post-section">
                <div className="title-add-new-post">Add new post:</div>
                <div>
                    <label for="image">Image:</label>
                    <input  type="text" id="image"  placeholder="Add image url" onChange={this.onInputChange('image')} />
                    {
                        image !== '' ? <img  src={image} /> : null
                    }
                </div>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" id="title" placeholder="Title" onChange={this.onInputChange('title')} />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" id="description" placeholder="Description" onChange={this.onInputChange('description')} />
                </div>
                <div className="add submit">
                    <button onClick={this.onAdd}>Add</button>
                </div>
            </div>
        );
    }
}

export default AddPost;