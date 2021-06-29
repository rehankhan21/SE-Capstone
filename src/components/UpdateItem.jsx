import React, {Component} from 'react';
import ItemService from '../services/ItemService';

class DeleteItem extends Component {
    constructor(props){

        super(props)
        this.state = {
            id: "",
            name: "",
            price: "",
            description: "",
            category: "",
            duration: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(event){

        event.preventDefault()

        let item = {
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            category: this.state.category,
            duration: this.state.duration
        }

        ItemService.updateItem(this.state.id, item);

        this.props.history.push('/')
    }

    handleChange(event) {

        const {name, value} = event.target
        this.setState({
            [name] : value
        })


    }

    render() {

        return(
        <div>
        <form onSubmit={this.handleUpdate}>
    <label>Item Id</label>
    <input type="text" value={this.state.id} onChange={this.handleChange} name="id"></input>

<label>Item Name</label>
<input type="text" value={this.state.name} onChange={this.handleChange} name="name"></input>

<label>Item Price</label>
<input type="text" value={this.state.price} onChange={this.handleChange} name="price"></input>

<label>Item Description</label>
<input type="text" value={this.state.description} onChange={this.handleChange} name="description"></input>

<label>Item Category</label>
<input type="text" value={this.state.category} onChange={this.handleChange} name="category"></input>

<label>Item Duration</label>
<input type="text" value={this.state.duration} onChange={this.handleChange} name="duration"></input>

<button type="submit">submit</button>
</form>
        </div>
        )
    }
}

export default DeleteItem;