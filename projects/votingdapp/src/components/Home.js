import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [isConnected, setIsConnected] = useState(false);

    const connectWallet = () => {
        // Check if MetaMask is installed
        if (window.ethereum) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(() => {
                    setIsConnected(true);
                    navigate("/participant")
                })
                .catch((error) => {
                    console.log(error);
                });
                
        } else {
            console.log('MetaMask not detected');
        }
    };


    return (
        <div className="container">
            <h1 className="title">Web3 Voting Dapp </h1>
            
            <button className="button" onClick={connectWallet}>
                Connect Wallet
               {/* { <Link to='/participant'> Connect krlo </Link> } */}
            </button>
        </div>

    )
}

export default Home