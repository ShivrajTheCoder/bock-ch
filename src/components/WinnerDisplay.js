import React from 'react';

const WinnerDisplay = ({ winner }) => {
  return (
    <div className="bg-blue-500 p-4 text-white mt-4">
      {winner ? (
        <h2 className="text-xl font-bold">Winner: {winner}</h2>
      ) : (
        <p>No winner found</p>
      )}
    </div>
  );
};

export default WinnerDisplay;
