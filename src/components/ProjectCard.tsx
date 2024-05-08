import { FragmentType, getFragmentData } from '@/gql';
import { ProjectFragment } from '@/graphql/fragments';
import { Link } from 'react-router-dom';

const ProjectCard = ({
  project,
}: {
  project: FragmentType<typeof ProjectFragment>;
}) => {
  const item = getFragmentData(ProjectFragment, project);

  return (
    <li className="hover:text-red-400 text-center">
      <h3>{item.projectName}</h3>
      <Link className="hover:text-red-400" to={`/security/projects/${item.id}`}>
        Content
      </Link>
    </li>
  );
};

export default ProjectCard;
