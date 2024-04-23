import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers=useLoaderData()

    return (
        <div>
            <h1>users : {loadedUsers.length}</h1>
        </div>
    );
};

export default Users;