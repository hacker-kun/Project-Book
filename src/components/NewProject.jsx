import React, { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({onAddProject,onCancel}){
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const modal = useRef();

    function handleSave(){
        const enteredTitle = title.current.value ;
        const enteredDescription = description.current.value ;
        const enteredDate = date.current.value ;

        if(enteredTitle.trim()===''|| enteredDescription.trim()===''|| enteredDate.trim()===''){
            modal.current.open();
            return;
        }

        onAddProject({
            title : enteredTitle,
            description : enteredDescription,
            dueDate : enteredDate
        })

    }
    return(
        <>
        <Modal ref={modal} buttonCaption = {'Close'}>

            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops..looks like you forget to enter the input</p>
            <p className="text-stone-600 mb-4">Please enter a valid input in every field. </p>

        </Modal>
        
        <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            {/* CANCEL BUTTON  */}
            <li>
                <button className=" text-stone-800  hover:text-stone-950 rounded-md" onClick={onCancel}>
                Cancel
                </button>
            </li>
            {/* SAVE BUTTON  */}
            <li>
                <button onClick = {handleSave} className="px-6 py-2 bg-stone-800 text-stone-300 hover:bg-stone-950 hover:text-stone-100 rounded-md">
                Save
                </button>
            </li>
        </menu>
        <div>
            <Input label = "Title" ref={title}  />
            <Input label = " Description " ref ={description} isTextArea/>
            <Input label = "Due Date" type ="date" ref={date}/>
        </div>


        </div>
        </>
    )
}
