import {useEffect, useState} from "react";
import axios from "axios";


function Home() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getAllProjects();
    }, []);

    const getAllProjects = async () => {
        try {
            const response = await axios.get('http://localhost:3000/expense');
            console.log(response.data);
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div className="App">
            <h1>Expense Management</h1>
           <h2>All Projects:</h2>
            <ul>
            {projects.map((project) => (
                <li key={project.id}>
                project name :  { project.name}
                    <ul>
                        {project.users.map((user) => (
                            <li key={user.name}>
                                user name : {user.name} <br/>
                                expense : {user.expense}
                            </li>
                            ))}
                    </ul>
                </li>
            ))}
            </ul>
        </div>
    )
}


export default Home;
