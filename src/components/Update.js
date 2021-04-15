import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu'
class Update extends Component {

    constructor(){
        super();
        this.state={
            name:null,
            desc:null,
            price:null,
            quantity:null,
            id:null
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/inventory/'+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
               this.setState({
                   name:result.name,
                   desc:result.desc,
                   price:result.price,
                   quantity:result.quantity,
                   id:result.id
               })
            })
        })
    }

    update(){
        fetch('http://localhost:3000/inventory/'+this.state.id,{
            method: "PUT",
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Inventory Has Been Updated")
            })
        })
    }


    render() {
        return (
            <div>
                <NavBarMenu />
                <h1>Update Inventory</h1>
                <div>
                <input onChange={(event)=>{this.setState({name:event.target.value})}} 
                placeholder="Name" value={this.state.name}/> <br/> <br/>
                <input onChange={(event)=>{this.setState({desc:event.target.value})}} 
                placeholder="Decsription" value={this.state.desc}/> <br/> <br/>
                <input onChange={(event)=>{this.setState({price:event.target.value})}} 
                placeholder="Price" value={this.state.price}/> <br/> <br/>
                <input onChange={(event)=>{this.setState({quantity:event.target.value})}} 
                placeholder="Quantity" value={this.state.quantity}/> <br/> <br/>
                <button onClick={()=>{this.update()}}>Update Record</button>
            </div>
            </div>
        );
    }
}

export default Update;