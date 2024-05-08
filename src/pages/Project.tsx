import BOW from '@/components/BOW';
import { SendNotify } from '@/components/NotifyHandler';
import LoadingScreen from '@/components/UmSysCtrl/LoadingScreen';
import NoDataFound from '@/components/UmSysCtrl/NoDataFound';
import { FragmentType, getFragmentData } from '@/gql';
import { FindProjectQueryDocument } from '@/gql/graphql';
import { ProjectFragment } from '@/graphql/fragments';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const projectId = useParams().id || '';
  const { data, loading } = useQuery(FindProjectQueryDocument, {
    variables: { projectId },
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return <LoadingScreen />;
  }

  if (!data || !data.findProjectById) {
    return <NoDataFound />;
  }

  const projectProps: FragmentType<typeof ProjectFragment> =
    data.findProjectById;
  const project = getFragmentData(ProjectFragment, projectProps);

  return (
    <div className="w-screen h-fit space-y-1.5 bg-slate-400 dark:bg-black dark:text-white">
      <div className="pt-2 text-center">
        <h3 className="italic text-red-600 font-medium">Results List below</h3>
      </div>
      {project?.models?.map(
        (e, i) => e && <BOW key={`bio-weapon-${i}`} model={e} />
      )}
    </div>
  );
};

export default ProjectPage;
