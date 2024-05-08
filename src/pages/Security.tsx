import { SendNotify } from '@/components/NotifyHandler';
import ProjectCard from '@/components/ProjectCard';
import SearchInterface from '@/components/SearchInterface';
import LoadingScreen from '@/components/UmSysCtrl/LoadingScreen';
import NoDataFound from '@/components/UmSysCtrl/NoDataFound';
import UmbrellaLabel from '@/components/UmSysCtrl/UmbrellaLabel';
import { AllProjectsQueryDocument } from '@/gql/graphql';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const { t } = useTranslation();
  const [sortOption, setSortOption] = useState<string>('DATE_DESC');
  const { data, loading } = useQuery(AllProjectsQueryDocument, {
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return <LoadingScreen />;
  }

  if (!data || !data.allProjects) {
    return <NoDataFound />;
  }

  // Refers https://github.com/apollographql/apollo-client/issues/5903
  // For using JavaScript, note that you cannot directly change read-only cache.

  const orderedProjects = data.allProjects;

  return (
    <div className="w-screen bg-black flex flex-col gap-1">
      <div className="mt-2 w-11/12 sm:w-4/5 m-auto border-2 border-transparent rounded-sm bg-yellow-200 text-black">
        <h3 className="font-bold text-red-800 text-center">Warning</h3>
        <p className="text-red-600">
          Those files contains images of explicit violence and gore.
        </p>
        <p className="text-red-600">
          If you are under the legal age, please leave.
        </p>
      </div>
      <div className="w-11/12 h-fit gap-1 sm:w-4/5 md:w-6/7 lg:w-[800px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600">
        <div className="flex flex-col justify-center md:w-6/7 m-2 lg:w-[700px] border-2 border-transparent rounded-sm border-slate-400 bg-gray-200 opacity-90">
          <h2 className="italic text-sm sm:text-base text-red-600 text-center bg-black">
            {t('System.CTRL', { ns: 'umbrellaSecurity' })}
          </h2>
          <span className="text-black italic">
            For other documents, visit
            <Link className="text-orange-600" to="/security/archives">
              "archives"
            </Link>
            .
          </span>
          <SearchInterface
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
          <div className="w-full mt-4 m-auto border-2 rounded-sm border-transparent dark:bg-black">
            <UmbrellaLabel title="File List" />
          </div>

          <ul className="pl-2 style-inside italic text-sm sm:text-base text-red-800">
            {orderedProjects &&
              orderedProjects.map(
                (item, i) =>
                  item && <ProjectCard key={`project-${i}`} project={item} />
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
