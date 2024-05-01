import { IProject } from '@/@types/types';
import BOWModel from '@/components/BOWModel';
import { SendNotify } from '@/components/NotifyHandler';
import { GET_PROJECT_BY_ID } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const projectId = useParams().id;
  const { data, loading } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId },
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return (
      <div className="bg-slate-400 dark:bg-black">
        <p className="dark:text-white">Loading</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-black text-white">
        <p>project data not found</p>
      </div>
    );
  }

  const project: IProject = data.findProjectById;

  return (
    <div className="w-screen h-fit space-y-1.5 bg-slate-400 dark:bg-black dark:text-white">
      <div className="pt-2 text-center">
        <h3 className="italic text-red-600 font-medium">Results List below</h3>
      </div>
      {project.models.map((model, index) => (
        <BOWModel key={index} model={model} />
      ))}
    </div>
  );
};

export default ProjectPage;
