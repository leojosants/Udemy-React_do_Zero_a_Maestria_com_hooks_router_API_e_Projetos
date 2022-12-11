// 
import { useState } from "react";

const ListRender = () => {

    const [list] = useState(['Leonardo', 'Dalva', 'Jennifer'])

    const [users, setUsers] = useState([
        { id: 1, name: 'Leonardo', age: 38 },
        { id: 2, name: 'Dalva', age: 36 },
        { id: 3, name: 'Jennifer', age: 30 },
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    };

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <ul>
                {users.map((item) => (
                    <li key={item.id}>Nome: {item.name}, Idade: {item.age} anos.</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    );
};

export default ListRender