const BigNumber = require('bignumber.js');

// Helper function for creating delays
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function for logging messages
function logMessage(message, type = 'info') {
    const logContainer = document.getElementById('logContainer');
    const timestamp = new Date().toLocaleTimeString();
    
    const logEntry = document.createElement('div');
    logEntry.className = `mb-2 ${type === 'error' ? 'text-red-500' : 'text-gray-800'}`;
    
    // Add icon based on message type
    const icon = type === 'error' ? '❌' : '📝';
    
    logEntry.innerHTML = `
        <span class="text-gray-500">[${timestamp}]</span>
        <span class="mx-1">${icon}</span>
        <span>${message}</span>
    `;
    
    logContainer.appendChild(logEntry);
    
    // Auto-scroll to bottom
    logContainer.scrollTop = logContainer.scrollHeight;
}

// Main generation function
async function generateFlashUSDT() {
    const generateBtn = document.getElementById('generateBtn');
    
    try {
        // Disable the generate button
        generateBtn.disabled = true;
        generateBtn.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Initial setup message
        logMessage("Setup Environment for Flash USDT Generation. Please wait for a moment...");
        
        // Display wallet address
        const walletAddress = "TR6x9z6sHgrVf52gmpk8N4MQWQH3GstDrC";
        logMessage(`Using wallet address: ${walletAddress}`);
        
        // Create BigNumber instance for USDT amount
        const flashUSDT = new BigNumber(1000000000);
        
        // Simulate environment setup
        await sleep(2000);
        logMessage("Setting up environment....");
        
        // Simulate processing
        await sleep(5000);
        logMessage("Environment setup is done successfully.");
        
        // Simulate USDT generation
        logMessage(`Generating ${flashUSDT.toFormat()} USDT. It will take some time... Please wait...`);
        
        // Simulate final processing
        await sleep(10000);
        
        // Simulate error
        logMessage("Failed: Transaction reverted due to insufficient gas limit.", 'error');
        
    } catch (error) {
        // Log any unexpected errors
        logMessage(`Unexpected error: ${error.message}`, 'error');
        console.error('Error in generateFlashUSDT:', error);
        
    } finally {
        // Re-enable the generate button
        generateBtn.disabled = false;
        generateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

// Function to clear the log
function clearLog() {
    const logContainer = document.getElementById('logContainer');
    while (logContainer.firstChild) {
        logContainer.removeChild(logContainer.firstChild);
    }
    logMessage("Log cleared.");
}

// Add event listeners once the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get button elements
    const generateBtn = document.getElementById('generateBtn');
    const clearLogBtn = document.getElementById('clearLogBtn');
    
    // Add click event listeners
    generateBtn.addEventListener('click', generateFlashUSDT);
    clearLogBtn.addEventListener('click', clearLog);
    
    // Add initial log message
    logMessage("Flash USDT Generator initialized. Ready to generate.");
});