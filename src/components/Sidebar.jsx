import React from "react"
import Button from "./Button"

export default function SideBar({ onStartAdd, projects, onSelectProject, selectedprojectID }) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">

            <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-xl">Your Project</h2>
            <div>
                <Button onClick={onStartAdd}> + Add Projects </Button>
            </div>
            <ul className="mt-8">
                { projects.map((project) => {

                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-600 hover:text-stone-100";

                    if (project.id === selectedprojectID) {
                        cssClasses += ' bg-stone-600 text-stone-100';
                    } else{
                        cssClasses += ' bg-stone-800 text-stone-400';
                    }



                    
                    return (<li key={project.id}>
                        <button onClick={()=> onSelectProject(project.id)}
                            className={cssClasses}>
                            {project.title}
                        </button>
                    </li>)
                })}
            </ul>
        </aside>
    )
}