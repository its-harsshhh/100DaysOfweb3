import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ParticipantPage = () => {

  const navigate = useNavigate();

  const handleDisconnect = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        await window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
        await window.ethereum.request({ method: 'wallet_requestLogout' });
        // Redirect to the home page
        navigate('/Home');
      } else {
        console.error('MetaMask extension not found.');
      }
    } catch (error) {
      console.error('Failed to disconnect MetaMask wallet:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Participant Page</h1>

      <Link to="./components/VoterPage.js">
        <button className="button">You are a Voter</button>
      </Link>

      <br/>

      <Link to='/RepresentativePage'> 
        <button className="button">You are a Representative of a Political Party</button>
      </Link>

      <br/>

     
      <button className="button" onClick={handleDisconnect}>Disconnect Wallet</button>
     

    </div>
  );
};

export default ParticipantPage;
