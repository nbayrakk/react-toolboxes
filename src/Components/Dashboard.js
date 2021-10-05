import FormComponent from './FormComponent';
import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
export default function Dashboard() {
    const cardStyle = {
        display: "flex",
        padding:"0.7rem"
    }
    const initalUsers = [
        { fullName: "Test User", id: 1, email: "test@test.com" },
        { fullName: "Test User1", id: 2, email: "test1@test.com" },
        { fullName: "Test User2", id: 3, email: "test2@test.com" }
    ]
    const [users, setUsers] = useState(initalUsers);
    const [selectedUser, setUser] = useState(initalUsers[0]);
    useEffect(() => {
        setUser(selectedUser)
    }, [])
    conso
    const onChange = (event) => {
        const { name, value } = event.target
        setUser(preUser => ({
            ...preUser,
            [name]: value
        }))
    }
    return (
        <div className="container">
            <div className="col-md-12 row">
                <div style={{padding:"3rem 1rem 0 0"}} className="col-md-3">
                    <ListGroup>
                        {users.map(user => {
                            return (<ListGroupItem active={user.id === selectedUser.id} onClick={() => setUser(user)} className="list-group-item" key={user.id}>
                                {user.fullName}
                            </ListGroupItem>)
                        })}
                    </ListGroup>
                </div>
                <div style={{padding:"3rem 0 0 0"}} className="col-md-9">
                    <div style={cardStyle} className="card">
                        <FormComponent onChange={onChange} selectedUser={selectedUser} />
                    </div>
                </div>
            </div>


        </div>
    )
}
