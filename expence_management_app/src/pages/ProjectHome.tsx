import {useState} from "react";
import axios from 'axios';

function ProjectHome() {
    const [projectName, setProjectName] = useState('');
    const [participants, setParticipants] = useState([]);
    const [results, setResults] = useState(null);


    const createProject = async () => {
        try {
            console.log(projectName);
            console.log(participants);
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
        <div>
            <label>
                Project Name:
                <input type="text"  onChange={(e) => setProjectName(e.target.value)} />
            </label>
            <br/>
            <label>
                Participants
                <input type="text" onChange={(e) =>setParticipants(e.target.value.split(','))} />
            </label>
            <br/>
            <button onClick={createProject}>Create Project</button>
            {/*<button onClick={calculateExpense}>Calculate Expenses</button>*/}

            {/*{results && (*/}
            {/*    <div>*/}
            {/*        <h2>Expense Results:</h2>*/}
            {/*        <pre>{JSON.stringify(results, null, 2)}</pre>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}

export default ProjectHome;
