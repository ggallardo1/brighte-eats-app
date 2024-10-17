import { GET_LEADS } from '../../queries/queries';
import { useQuery } from '@apollo/client';
import LeadForm from './Form';
import LeadsList from './List';

const LeadPage = () => {
    const { refetch } = useQuery(GET_LEADS);

    return (<>
    <LeadForm onLeadAdded={refetch}/>
    <LeadsList onRefetch={refetch}/>
    </>);
}

export default LeadPage