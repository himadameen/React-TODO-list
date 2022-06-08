
import React from "react";
import "./../styles/App.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [input, setInput] = useState("");
  const [itemList, setItemList] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [tempTask, setTempTask] = useState("");
  const handleAdd = () => {
    var obj = {
      id: nanoid(),
      task: input,
    };
    if (input !== "") {
      setItemList([...itemList, obj]);
      console.log(itemList);
      setInput("");
    }
  };
  const handleChange = e => {
    setInput(e.target.value);
    console.log(input);
  };
  const handleEdit = id => {
    setShowEdit(true);
    setEditId(id);
  };
  const tempEdit = e => {
    setTempTask(e.target.value);
    console.log(tempTask);
  };
  const handleSave = () => {
    if (tempTask != "") {
      let tempList = itemList.map(item => {
        if (item.id === editId) {
          item.task = tempTask;
        }
        return item;
      });
      setItemList(tempList);
      setShowEdit(false);
      setEditId("");
      setTempTask("");
    }
  };
  const handleDlt = idx => {
    let tempDel = [...itemList];
    tempDel.splice(idx, 1);
    setItemList(tempDel);
  };
  return (
    <div id="main">
      <div className="col-12">
        <textarea id="task" onChange={handleChange} value={input} />
        <button id="btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {itemList &&
            itemList.map((item, index) => {
              return (
                <li className="list" key={index + 1}>
                  {item.task}
                  <button className="edit" onClick={() => handleEdit(item.id)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDlt(index)}>
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
        {showEdit && (
          <div>
            <textarea
              className="editTask"
              onChange={tempEdit}
              value={tempTask}
            />
            <button className="saveTask" onClick={handleSave}>
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );

}
export default App;


































//************************************************************************** */

// import React, { useState } from "react";
// import {nanoid} from 'nanoid';
// import "./../styles/App.css";

// function App() {

// 	const [state, setState] = useState("");
// 	const [todo, setTodo] = useState([]);
// 	const [edt, setEdit] = useState("");
// 	const [edtValue, setEdtVal] = useState("");
// 	const [save, setSave] = useState(false);



// 	const handleChange = (e) => {
// 		console.log(e.target.value);
// 		const input = e.target.value;
// 		setState(input);
// 	}

// 	const adding = () => {
// 		let obj = {
// 			id : nanoid(),
// 			task: state,
// 			status: false
// 		}
// 		if(state !== ''){
// 			setTodo([...todo, obj]);
// 		console.log(todo);
// 		setState('');
// 		console.log(state);
// 		}
// 	}

// 	const edit = (data) => {
// 		setEdit(data);
// 		setSave(true);
// 	}

// 	const handleEdit = (e) => {
// 		console.log(e.target.value);
// 		setEdtVal(e.target.value);
// 	}

// 	const saveEdit = () => {
// 		if(edtValue != ""){
// 			setSave(false);
// 			let temp = todo.map((item) => {
// 				if(item.id === edt){
// 					item.task = edtValue;
// 				}
// 				return item;
// 			})
// 			console.log(temp);
// 			setTodo(temp);
// 			setEdtVal('');
// 			setEdit('');

// 		}
// 	}

// 	const dele = (index) => {
// 		let dlt = [...todo];
// 		dlt.splice(index , 1);
// 		setTodo(dlt);
// 	}


// 	return (

// 		<div id="main">
// 			<textarea value={state} id="task" onChange={handleChange}></textarea>
// 			<button id="btn" onClick={adding}>Add</button>
// 			<div>
// 				<ul>
// 					{todo && todo.map((item, index) => {
// 						return (
// 							<li className="list" key={index + 1}>{item.task}
// 								<button onClick={() => edit(item.id)}>Edit</button>
// 								<button onClick={() => dele(index)}>Delete</button>
// 							</li>
// 						)
// 					})}

// 					{save && (
// 					<>
// 					<textarea value={edtValue} className="editTask" onChange={handleEdit}></textarea>
// 					<button className="saveTask" onClick={saveEdit} >Save</button>
// 					</>
// 					)}
// 				</ul>
// 			</div>
// 		</div>
// 	);
// }


// export default App;
