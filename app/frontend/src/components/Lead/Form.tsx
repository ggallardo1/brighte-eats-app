import './Form.css';
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const REGISTER_LEAD = gql`
  mutation RegisterLead($name: String!, $email: String!, $mobile: String!, $postcode: String!, $services: [String!]!) {
    registerLead(name: $name, email: $email, mobile: $mobile, postcode: $postcode, services: $services) {
      id
      name
      email
      mobile
      postcode
      services
    }
  }
`;

const LeadForm: React.FC<{ onLeadAdded: () => void }> = ({ onLeadAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [postcode, setPostcode] = useState('');
  const [services, setServices] = useState<string[]>([]);

  const [registerLead] = useMutation(REGISTER_LEAD);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await registerLead({
      variables: {
        name, email, mobile, postcode, services
      },
    });
    onLeadAdded();

    // Reset form after submission
    setName('');
    setEmail('');
    setMobile('');
    setPostcode('');
    setServices([]);
  };

  return (
    <div>
        <h1 className="text-4xl m-5 align-center text-center">New Lead</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2 w-1/2 mx-auto">
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="border-solid border-2 border-slate-500 p-2 my-2 w-full" />
            </div>
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="border-solid border-2 border-slate-500 p-2 my-2 w-full"/>
            </div>
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile" required className="border-solid border-slate-500 border-2 p-2 my-2 w-full"/>
            </div>
            <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postcode</label>
                <input value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Postcode" required className="border-solid border-slate-500 border-2 p-2 my-2 w-full"/>
            </div>
            <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Services interested in?</label>
                <select multiple onChange={(e) => setServices(Array.from(e.target.selectedOptions, option => option.value))} className="border-solid border-slate-500 border-2 p-2 my-2 w-full">
                    <option value="delivery">Delivery</option>
                    <option value="pick-up">Pick-up</option>
                    <option value="payment">Payment</option>
                </select>
            </div>
            <button type="submit" className="border-solid border-indigo-900 border-2 p-2 my-2 w-full bg-indigo-500 text-slate-100 rounded-lg hover:bg-indigo-900">Register</button>
        </form>
    </div>
  );
};

export default LeadForm;