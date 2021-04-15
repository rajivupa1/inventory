import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import NavBarMenu from './NavBarMenu'

class List extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }

    componentDidMount() {
        this.getdata();              // Calling Getdata Function 
    }

    getdata(){                                                            // Function for fetching  data
        fetch("http://localhost:3000/inventory").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }

    delete(id){
        fetch('http://localhost:3000/inventory/'+id,
        {
            method: "Delete",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Inventory Has Been Deleted")
                this.getdata();                           // Calling Getdata Function
            })
        })
    }

    render() {
        //console.warn(this.state)
        return (
            <div>
                <NavBarMenu />
                <h1>Inventory List</h1>
                {
                    this.state.list ?
                        <div>
                            <Table striped bordered hover>

                                <thead>
                                    <tr>
                                       <th>#</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>price</th>
                                        <th>Quantity</th>
                                        <th>Opration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.list.map((item, i) =>
                                        
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.desc}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                                <td><Link to={"/update/"+item.id}><FontAwesomeIcon 
                                                icon={faEdit} color="orange" /></Link>
                                                <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon 
                                                icon={faTrash} color="red"/></span>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default List;