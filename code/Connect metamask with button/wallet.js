const connectButton = document.getElementById("connectButton");
connectButton.addEventListener("click", connectMetamask);

async function connectMetamask() {
    // Check if Metamask is installed and connected
    if (window.ethereum) {
      // Request the user's permission to connect
      await window.ethereum.enable();
      // Now you have access to the user's Ethereum account
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      // You can use the accounts for further interactions
      console.log("Connected to Metamask. Account:", accounts[0]);
    } else {
      console.log("Metamask not found. Please install Metamask.");
    }
  }
  