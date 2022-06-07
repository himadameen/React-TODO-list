import React, { useState } from "react";
import {nanoid} from 'nanoid';
import "./../styles/App.css";

function App() {
	const [state, setState] = useState("");
	const [todo, setTodo] = useState([]);
	const [edt, setEdit] = useState("");
	const [edtValue, setEdtVal] = useState("");
	const [save, setSave] = useState(false);



	const handleChange = (e) => {
		console.log(e.target.value);
		const input = e.target.value;
		setState(input);
	}

	const adding = () => {
		let obj = {
			id : nanoid(),
			task: state,
			status: false
		}
		if(state != ''){
			setTodo([...todo, obj]);
		console.log(todo);
		setState('');
		console.log(state);
		}
		
	}

	const edit = (data) => {
		setEdit(data);
		setSave(true);
	}

	const handleEdit = (e) => {
		console.log(e.target.value);
		setEdtVal(e.target.value);
	}

	const saveEdit = () => {
		setSave(false);
		if(edtValue != ""){
			let temp = todo.map((item) => {
				if(item.id === edt){
					item.task = edtValue;
				}
				return item;
			})
			console.log(temp);
			setTodo(temp);
			// edtValue('');
		}
	}

	const dele = (index) => {
		let dlt = [...todo];
		dlt.splice(index , 1);
		setTodo(dlt);
	}


	return (
		<div id="main">
			<textarea value={state} id="task" onChange={handleChange}></textarea>
			<button id="btn" onClick={adding}>Add</button>
			<div>
				<ul>
					{todo && todo.map((item, index) => {
						return (
							<li className="list" key={index + 1}>{item.task}
								<button onClick={() => edit(item.id)}>Edit</button>
								<button onClick={dele}>Delete</button>
							</li>
						)
					})}
					{save && (
					<>
					<textarea value={edtValue} onChange={handleEdit} className="editTask"></textarea>
					<button id="btn" onClick={saveEdit} className="saveTask">Save</button>
					</>
					)}
				</ul>
			</div>
		</div>
	);
}


export default App;
