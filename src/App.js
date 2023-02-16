import React, { useState } from 'react';
import './CoinSelectionBoard.css'; // Import the CSS file for styling

function CoinCheckBoard() {
  
  // Initialize the state to store the selected coins and the board
  const [selectedCoins, setSelectedCoins] = useState([]);
  // Function to handle when the user clicks on a coin
  const handleCoinSelect = (id) => {
    // Check if the coin is already selected
    const index = selectedCoins.indexOf(id);
    if (index > -1) {
      // Remove the coin from the selected coins list
      const newSelectedCoins = [...selectedCoins];
      newSelectedCoins.splice(index, 1);
      setSelectedCoins(newSelectedCoins);
    } else {
      // Add the coin to the selected coins list
      setSelectedCoins([...selectedCoins, id]);
      
    } 
  };


  

  // Generate the selected coin grid
  const selectedCoinList = [];
  for (let i = 0; i < 40; i += 2) {
    const coin1 = selectedCoins[i];
    const coin2 = selectedCoins[i + 1];
    selectedCoinList.push(
      <div className="selected-coin-row" key={i}>
        <div className="selected-coin-cell">
          {coin1 && <img src={`./Coins/${coin1}.png`} alt={`Coin ${coin1}`} />}
        </div>
        <div className="selected-coin-cell">
          {coin2 && <img src={`./Coins/${coin2}.png`} alt={`Coin ${coin2}`} />}
        </div>
      </div>
    );
  }

  return (
  
      <div className="coin-selection-board"> 
      
      <div className="coin-board">
        {[...Array(80)].map((_, index) => {
          const id = index + 1;
          const isSelected = selectedCoins.includes(id);
          return (
            <Coin
              key={id}
              id={id}
              onSelect={handleCoinSelect}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      <div className="selected-coin-board">
        <div className="selected-coin-grid">{selectedCoinList}</div>
        </div>
    </div>
  );
}

function Coin({ id, onSelect, isSelected }) {
  // Handle the click event on the coin
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div
      className={`coin ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <img src={`./Coins/${id}.png`} alt={`Coin ${id}`} />
    </div>
  );
}

export default CoinCheckBoard;
