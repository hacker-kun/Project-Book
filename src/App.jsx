import React, { useState } from "react";
import SideBar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import Fallback from "./components/Fallback.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import { DummyData } from "./components/DummyData.jsx";

function App() {
  const [projectState, setProjectState] = useState({

    selectedProjectID: undefined,
    projects: [...DummyData],
    

  })

  // function handleAddTask(task){
  //   setProjectState((prevState) => {
  //     const taskID = Math.random();
  //     const newTasks = {
  //       text: task,
  //       projectID: prevState.selectedProjectID, // to associate with the last project i slected 
  //       id: taskID,
  //     }
  //     return {
  //       ...prevState,
  //       tasks: [newTasks,...prevState.tasks]
      
  //     };
  //   })
  //   console.log(task);

  // }

  function handleAddTask(task) {
    setProjectState((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: task,
        projectID: prevState.selectedProjectID, // Associate with selected project
        id: taskID,
      };
  
      // Update the tasks of the specific project
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectID) {
          return {
            ...project,
            tasks: [newTask, ...(project.tasks || [])], // Add the new task
          };
        }
        return project;
      });
  
      return {
        ...prevState,
        projects: updatedProjects, // Save updated projects with the new task
      };
    });
    console.log(task);
  }
  

  // function handleDeleteTask(id){
  //   setProjectState((prevState) => {
  //     return {
  //       ...prevState,
        
  //       tasks: prevState.tasks.filter((task)=>task.id !== id)
  //     };
  //   })
    
  // }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      // Update the tasks of the specific project
      const updatedProjects = prevState.projects.map((project) => {
        if (project.id === prevState.selectedProjectID) {
          return {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== id), // Remove the task by filtering out
          };
        }
        return project;
      });
  
      return {
        ...prevState,
        projects: updatedProjects, // Save updated projects with the task removed
      };
    });
  }
  

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: id,

      }
    })

  }

  // Intial when create new project
  function startProjectHandler() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }
  // when we click cancel go back to initial state 
  function cancelButtonHandler() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
      }
    })

  }
  // when we click save project 
  function addProjectHandler(projectData) {
    setProjectState((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      }
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject]
      }
    })

  }

  function handleDeleteSelectedProject(){
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter((project)=>project.id !== prevState.selectedProjectID)
      };
    })

  }


  const selectedProject = projectState.projects.find((project) => project.id === projectState.selectedProjectID);

  let content = (
  <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteSelectedProject}
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  // tasks={projectState.tasks}
  tasks={selectedProject?.tasks || []} // Use the tasks of the selected project
  />
  );




  if (projectState.selectedProjectID === null) {
    content = <NewProject onAddProject={addProjectHandler} onCancel={cancelButtonHandler} />
  }
  else if (projectState.selectedProjectID === undefined) {
    content = <Fallback onStartAdd={startProjectHandler} />
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          onStartAdd={startProjectHandler}
          projects={projectState.projects}
          onSelectProject={handleSelectProject}
          selectedprojectID={projectState.selectedProjectID}
        />
        {content}

      </main>

    </>
  );
}

export default App;
