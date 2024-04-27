import ProjectModel from '@/components/ProjectModel';
import { Projects } from '@/dummyData';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();
  const project = Projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="bg-black text-white">
        <p>project data not found</p>
      </div>
    );
  }

  return (
    <div className="w-screen h-fit space-y-1.5 bg-slate-400 dark:bg-black dark:text-white">
      <div className="pt-2 text-center">
        <h3 className="italic text-red-600 font-medium">Results List below</h3>
      </div>
      {project.Models.map((model, index) => (
        <ProjectModel key={index} model={model} />
      ))}
    </div>
  );
};

export default ProjectPage;
