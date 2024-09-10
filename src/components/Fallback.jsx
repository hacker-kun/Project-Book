import noImage from "..//assets/no-projects.png";
import Button from "./Button";
export default function Fallback({onStartAdd}) {
    return (
        <div className="m-24 text-center w-2/3">
            <img src={noImage} alt="an empty task  list" className="h-16 w-16 mx-auto object-contain" />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected </h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
            <p className="mt-8">
            <Button onClick={onStartAdd}>Create New Project</Button>
            </p>
            
        </div>
    )
} 