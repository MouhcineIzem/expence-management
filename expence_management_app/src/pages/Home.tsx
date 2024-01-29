import {useEffect, useState} from "react";
import axios from "axios";


function Home() {
    const [projectName, setProjectName] = useState('');
    const [participants, setParticipants] = useState([]);
    const [projects, setProjects] = useState([]);
    const [results, setResults] = useState(null);

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
    const createProject = async () => {
        try {
            const response = await axios.post('https://localhost:3000/expense/create-project', {
                projectName,
                participants,
            });
            console.log('Project created: ', response.data);
        } catch (error) {
            console.error('Error creating project: ', error);
        }
    };

    const calculateExpense = async () => {
        try {
            const response = await axios.post('http://localhost:3000/expense/calculate-expense', {
                projectName,
                participants,
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error calculating expenses: ', error);
        }
    };
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
            <label>
                Project Name:
                <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.validationMessage)} />
            </label>
            <label>
                Participants
                <input type="text" value={participants} onChange={(e) =>setParticipants(e.target.value.split(','))} />
            </label>
            <button onClick={createProject}>Create Project</button>
            <button onClick={calculateExpense}>Calculate Expenses</button>

            {results && (
                <div>
                    <h2>Expense Results:</h2>
                    <pre>{JSON.stringify(results, null, 2)}</pre>
                </div>
            )}
        </div>
    )
}


export default Home;
