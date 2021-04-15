import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            desc: null,
            price: null,
            quantity: null
        }
    }
    create() {
        fetch("http://localhost:3000/inventory", {
            method: "Post",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Record Has Been Added")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu />
                <h1>Add Record</h1>
                <input onChange={(event) => { this.setState({ name: event.target.value }) }}
                    placeholder="Product Name" /> <br /> <br />

                <textarea rows="4" cols="25" name="comment" form="usrform"
                    onChange={(event) => { this.setState({ desc: event.target.value }) }} 
                    placeholder="Product Description" >
                </textarea><br /> <br />



                <input onChange={(event) => { this.setState({ price: event.target.value }) }}
                    placeholder="Price" /> <br /> <br />
                <input onChange={(event) => { this.setState({ quantity: event.target.value }) }}
                    placeholder="Quantity" /> <br /> <br />
                <button onClick={() => { this.create() }}>Add Record</button>
            </div>
        );
    }
}

export default Create;