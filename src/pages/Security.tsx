import { IProject } from '@/@types/types';
import { SendNotify } from '@/components/NotifyHandler';
import SearchInterface from '@/components/SearchInterface';
import UmbrellaLabel from '@/components/UmbrellaLabel';
import { ALL_PROJECTS } from '@/graphql/queries';
import OrderedByOption from '@/utils/sortHelper';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const { t } = useTranslation();
  const [sortOption, setSortOption] = useState<string>('DATE_DESC');
  const { data, loading } = useQuery(ALL_PROJECTS, {
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      SendNotify({ message: error.message });
    },
  });

  if (loading) {
    return (
      <div className="bg-gray-200 dark:bg-black">
        <p className="dark:text-white">Loading</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-gray-200 dark:bg-black">
        <p className="italic text-red-600">
          File Service currently disabled due to some problems on server.
        </p>
      </div>
    );
  }

  // Refers https://github.com/apollographql/apollo-client/issues/5903
  // You cannot directly change read-only cache.
  const CopiedProjects: Array<IProject> = [...data.allProjects];
  const orderedProjects = OrderedByOption(CopiedProjects, sortOption);

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
      <div className="w-11/12 h-fit sm:w-4/5 md:w-6/7 lg:w-[800px] m-auto border-2 rounded-sm border-slate-800 bg-gradient-to-b from-zinc-300 to-zinc-600">
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
          <UmbrellaLabel title="File List" />

          <ul className="pl-2 style-inside italic text-sm sm:text-base text-red-800">
            {orderedProjects &&
              orderedProjects.map((item) => (
                <li key={item.id} className="hover:text-red-400 text-center">
                  <h3>{item.projectName}</h3>
                  <Link
                    className="hover:text-red-400"
                    to={`/security/projects/${item.id}`}
                  >
                    Content
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;
