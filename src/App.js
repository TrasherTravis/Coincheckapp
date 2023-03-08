import React, { useState } from "react";
import "./CoinSelectionBoard.css"; // Import the CSS file for styling

function CoinCheckBoard() {
  // Initialize the state to store the selected coins and the board
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [selctedCoins2, setSelctedCoins2] = useState([]);
  const [selctedCoins3, setSelctedCoins3] = useState([]);
  const [selctedCoins4, setSelctedCoins4] = useState([]);
  const [selctedCoins5, setSelctedCoins5] = useState([]);
  const [selctedCoins6, setSelctedCoins6] = useState([]);
  const [selctedCoins7, setSelctedCoins7] = useState([]);
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
  const handleCoinSelect2 = (id) => {
    const index = selctedCoins2.indexOf(id);
    if (index > -1) {
      // Remove the coin from the selected coins list
      const newSelectedCoins = [...selctedCoins2];
      newSelectedCoins.splice(index, 1);
      setSelctedCoins2(newSelectedCoins);
    } else {
      // Add the coin to the selected coins list
      setSelctedCoins2([...selctedCoins2, id]);
    }
  };
  const handleCoinSelect3 = (id) => {
    const index = selctedCoins3.indexOf(id);
    if (index > -1) {
      // Remove the coin from the selected coins list
      const newSelectedCoins = [...selctedCoins3];
      newSelectedCoins.splice(index, 1);
      setSelctedCoins3(newSelectedCoins);
    } else {
      // Add the coin to the selected coins list
      setSelctedCoins3([...selctedCoins3, id]);
    }
  };
  const handleCoinSelect4 = (id) => {
    const index = selctedCoins4.indexOf(id);
    if (index > -1) {
      // Remove the coin from the selected coins list
      const newSelectedCoins = [...selctedCoins4];
      newSelectedCoins.splice(index, 1);
      setSelctedCoins4(newSelectedCoins);
    } else {
      // Add the coin to the selected coins list
      setSelctedCoins4([...selctedCoins4, id]);
    }
  };
  const handleCoinSelect5 = (id) => {
    const index = selctedCoins5.indexOf(id);
    if (index > -1) {
      // Remove the coin from the selected coins list
      const newSelectedCoins = [...selctedCoins5];
      newSelectedCoins.splice(index, 1);
      setSelctedCoins5(newSelectedCoins);
    } else {
      // Add the coin to the selected coins list
      setSelctedCoins5([...selctedCoins5, id]);
    }
  };
  const handleCoinSelect6 = (id) => {
    const index = selctedCoins6.indexOf(id);
    if (index > -1) {
      // Remove the coin from the selected coins list
      const newSelectedCoins = [...selctedCoins6];
      newSelectedCoins.splice(index, 1);
      setSelctedCoins6(newSelectedCoins);
    } else {
      // Add the coin to the selected coins list
      setSelctedCoins6([...selctedCoins6, id]);
    }
  };
  const handleCoinSelect7 = (id) => {
    const index = selctedCoins7.indexOf(id);
    if (index > -1) {
      // Remove the coin from the selected coins list
      const newSelectedCoins = [...selctedCoins7];
      newSelectedCoins.splice(index, 1);
      setSelctedCoins7(newSelectedCoins);
    } else {
      // Add the coin to the selected coins list
      setSelctedCoins7([...selctedCoins7, id]);
    }
  };

  // Generate the selected coin grid
  const selectedCoinList = [];
  for (let i = 0; i < 40; i += 2) {
    const coin1 = selectedCoins[i];
    const coin2 = selectedCoins[i + 1];
    const isSelected1 = selctedCoins2.includes(coin1);
    const isSelected2 = selctedCoins2.includes(coin2);
    selectedCoinList.push(
      <div className="selected-coin-row" key={i}>
        <div className="selected-coin-cell">
          {coin1 && (
            <Coin
              key={coin1}
              id={coin1}
              onSelect={handleCoinSelect2}
              isSelected={isSelected1}
            />
          )}
        </div>
        <div className="selected-coin-cell">
          {coin2 && (
            <Coin
              key={coin2}
              id={coin2}
              onSelect={handleCoinSelect2}
              isSelected={isSelected2}
            />
          )}
        </div>
      </div>
    );
  }
  const selectedCoinList2 = [];
  for (let i = 0; i < 20; i += 2) {
    const coin1 = selctedCoins2[i];
    const coin2 = selctedCoins2[i + 1];
    const isSelected1 = selctedCoins3.includes(coin1);
    const isSelected2 = selctedCoins3.includes(coin2);
    selectedCoinList2.push(
      <div className="selected-coin-row" key={i}>
        <div className="selected-coin-cell">
          {coin1 && (
            <Coin
              key={coin1}
              id={coin1}
              onSelect={handleCoinSelect3}
              isSelected={isSelected1}
            />
          )}
        </div>
        <div className="selected-coin-cell">
          {coin2 && (
            <Coin
              key={coin2}
              id={coin2}
              onSelect={handleCoinSelect3}
              isSelected={isSelected2}
            />
          )}
        </div>
      </div>
    );
  }

  const selectedCoinList3 = [];
  for (let i = 0; i < 10; i += 2) {
    const coin1 = selctedCoins3[i];
    const coin2 = selctedCoins3[i + 1];
    const isSelected1 = selctedCoins4.includes(coin1);
    const isSelected2 = selctedCoins4.includes(coin2);
    selectedCoinList3.push(
      <div className="selected-coin-row" key={i}>
        <div className="selected-coin-cell">
          {coin1 && (
            <Coin
              key={coin1}
              id={coin1}
              onSelect={handleCoinSelect4}
              isSelected={isSelected1}
            />
          )}
        </div>
        <div className="selected-coin-cell">
          {coin2 && (
            <Coin
              key={coin2}
              id={coin2}
              onSelect={handleCoinSelect4}
              isSelected={isSelected2}
            />
          )}
        </div>
      </div>
    );
  }
  const selectedCoinList4 = [];
  for (let i = 0; i < 5; i += 2) {
    const coin1 = selctedCoins4[i];
    const coin2 = selctedCoins4[i + 1];
    const isSelected1 = selctedCoins5.includes(coin1);
    const isSelected2 = selctedCoins5.includes(coin2);
    selectedCoinList4.push(
      <div className="selected-coin-row" key={i}>
        <div className="selected-coin-cell">
          {coin1 && (
            <Coin
              key={coin1}
              id={coin1}
              onSelect={handleCoinSelect5}
              isSelected={isSelected1}
            />
          )}
        </div>
        <div className="selected-coin-cell">
          {coin2 && (
            <Coin
              key={coin2}
              id={coin2}
              onSelect={handleCoinSelect5}
              isSelected={isSelected2}
            />
          )}
        </div>
      </div>
    );
  }
  const selectedCoinList5 = [];
  for (let i = 0; i < 4; i += 2) {
    const coin1 = selctedCoins5[i];
    const coin2 = selctedCoins5[i + 1];
    const isSelected1 = selctedCoins6.includes(coin1);
    const isSelected2 = selctedCoins6.includes(coin2);
    selectedCoinList5.push(
      <div className="selected-coin-row" key={i}>
        <div className="selected-coin-cell">
          {coin1 && (
            <Coin
              key={coin1}
              id={coin1}
              onSelect={handleCoinSelect6}
              isSelected={isSelected1}
            />
          )}
        </div>
        <div className="selected-coin-cell">
          {coin2 && (
            <Coin
              key={coin2}
              id={coin2}
              onSelect={handleCoinSelect6}
              isSelected={isSelected2}
            />
          )}
        </div>
      </div>
    );
  }
  const selectedCoinList6 = [];
  for (let i = 0; i < 1; i += 2) {
    const coin1 = selctedCoins6[i];
    const coin2 = selctedCoins6[i + 1];
    const isSelected1 = selctedCoins7.includes(coin1);
    const isSelected2 = selctedCoins7.includes(coin2);
    selectedCoinList6.push(
      <div className="selected-coin-row" key={i}>
        <div className="selected-coin-cell">
          {coin1 && (
            <Coin
              key={coin1}
              id={coin1}
              onSelect={handleCoinSelect7}
              isSelected={isSelected1}
            />
          )}
        </div>
        <div className="selected-coin-cell">
          {coin2 && (
            <Coin
              key={coin2}
              id={coin2}
              onSelect={handleCoinSelect7}
              isSelected={isSelected2}
            />
          )}
        </div>
      </div>
    );
  }
  // const selectedCoinList7 = [];
  // for (let i = 0; i < 1; i += 2) {
  //   const coin1 = selctedCoins6[i];
  //   const coin2 = selctedCoins6[i + 1];
  //   selectedCoinList7.push(
  //     <div className="selected-coin-row" key={i}>
  //       <div className="selected-coin-cell">
  //         {coin1 && <img src={`./Coins/${coin1}.png`} alt={`Coin ${coin1}`} />}
  //       </div>
  //       <div className="selected-coin-cell">
  //         {coin2 && <img src={`./Coins/${coin2}.png`} alt={`Coin ${coin2}`} />}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="coin-selection-board">
      <div className="coin-board">
        {[...Array(80)].map((_, index) => {
          const id = index + 1;
          console.log(id);
          const isSelected = selectedCoins.includes(id);
          console.log(isSelected);
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

      <div className="selected-coin-grid">{selectedCoinList}</div>
      <div className="selected-coin-two">{selectedCoinList2}</div>
      <div className="selected-coin-three">{selectedCoinList3}</div>
      <div className="selected-coin-four">{selectedCoinList4}</div>
      <div className="selected-coin-five">{selectedCoinList5}</div>
      <div className="selected-coin-six">{selectedCoinList6}</div>
      {/* <div className="selected-coin-seven">{selectedCoinList7}</div> */}
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
      className={`coin ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <img src={`./Coins/${id}.png`} alt={`Coin ${id}`} />
    </div>
  );
}

export default CoinCheckBoard;
