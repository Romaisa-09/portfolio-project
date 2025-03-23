import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard';
import axios from 'axios';

function Projects({ projects }) {
  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    // Example of REST API integration for fetching projects
    // If you have an API endpoint, replace the URL and implement accordingly.
    // Optionally include your API key in the request headers (if required).
    // axios.get('https://api.example.com/projects', {
    //   headers: { Authorization: `Bearer YOUR_API_KEY` }
    // })
    // .then(response => setProjectList(response.data))
    // .catch(error => console.error(error));

    // Simulate a delay to mimic dynamic fetching.
    const timer = setTimeout(() => {
      setProjectList(projects);
    }, 1000);
    return () => clearTimeout(timer);
  }, [projects]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(projectList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setProjectList(items);
  };

  return (
    <section id="projects" className="projects py-5 container">
      <h2 className="mb-4">Projects</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="projects">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {projectList.map((project, index) => (
                <Draggable key={index} draggableId={`project-${index}`} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-3">
                      <ProjectCard project={project} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
}

export default Projects;
