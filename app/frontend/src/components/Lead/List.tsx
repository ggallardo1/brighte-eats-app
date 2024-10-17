import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Lead } from '../../entity/Lead';
import { GET_LEADS } from '../../queries/queries';

interface GetLeadsData {
    leads: Lead[];
}

const LeadsList: React.FC<{ onRefetch: () => void }> = ({ onRefetch }) => {
  const { loading, error, data } = useQuery<GetLeadsData>(GET_LEADS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
        <h1 className="text-center text-4xl my-5">All Leads</h1>
        <table className="w-2/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-bold">
                <tr>
                    <td className="px-6 py-3">Name</td>
                    <td className="px-6 py-3">Email</td>
                    <td className="px-6 py-3">Mobile</td>
                    <td className="px-6 py-3">Postcode</td>
                    <td className="px-6 py-3">Services</td>
                </tr>
            </thead>
            <tbody>
                {data?.leads.length === 0 ? (
                    <tr>
                        <td colSpan={5} className="px-6 py-2 text-center">
                            No leads found.
                        </td>
                    </tr>
                ) : (
                    data?.leads.map((lead) => (
                        <tr key={lead.id}>
                            <td className="px-6 py-2">{ lead.name }</td>
                            <td className="px-6 py-2">{ lead.email }</td>
                            <td className="px-6 py-2">{ lead.mobile }</td>
                            <td className="px-6 py-2">{ lead.postcode }</td>
                            <td className="px-6 py-2">{ lead.services.join(', ') }</td>
                        </tr>
                    ))
                )}
                
            </tbody>
        </table>
    </div>
  );
};
export default LeadsList;