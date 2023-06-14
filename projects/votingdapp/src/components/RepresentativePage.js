import React, { useState } from 'react';
import { ethers } from 'ethers';
import submit from 'src/contracts/submit.json';

const RepresentativePage = ({ updateRepresentative }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [noPoliceRecord, setNoPoliceRecord] = useState('');
  const [partyName, setPartyName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !age || !noPoliceRecord || !partyName) {
      setError('Please fill in all fields.');
      return;
    }

    // Create a representative object with the form data
    const representative = {
      name,
      age,
      noPoliceRecord,
      partyName,
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        // Connect to Ethereum provider
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
  
        // Load the deployed contract
        const contractAddress = 'YOUR_CONTRACT_ADDRESS';
        const contractABI = YourSmartContract.abi;
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
        // Submit representative details to the smart contract
        await contract.addRepresentative(
          formData.name,
          parseInt(formData.age),
          formData.noPoliceRecord,
          formData.partyName
        );
  
        // Update the voter page with the representative's information
        updateRepresentative(formData);
      } catch (error) {
        console.error(error);
        // Handle error if the transaction fails
      }
    };

    // Pass the representative object to the updateRepresentative function
    updateRepresentative(representative);

    // Reset the form fields and error state
    setName('');
    setAge('');
    setNoPoliceRecord('');
    setPartyName('');
    setError('');
  };

  return (
    <div>
      <h1>Representative Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} />

        <label htmlFor="noPoliceRecord">No Police Record:</label>
        <input
          type="text"
          id="noPoliceRecord"
          value={noPoliceRecord}
          onChange={(e) => setNoPoliceRecord(e.target.value)}
        />

        <label htmlFor="partyName">Party Name:</label>
        <input
          type="text"
          id="partyName"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
        />

        {error && <p>{error}</p>}

        <button type="submit ">Submit</button>
      </form>
    </div>
  );
};

export default RepresentativePage;
