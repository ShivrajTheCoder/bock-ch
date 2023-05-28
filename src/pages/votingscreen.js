import React, { useState } from 'react';

const candidates = [
  { id: 1, name: 'Candidate 1', votes: 0 },
  { id: 2, name: 'Candidate 2', votes: 0 },
  { id: 3, name: 'Candidate 3', votes: 0 },
];

const votingscreen = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCandidateSelection = (event) => {
    setSelectedCandidate(event.target.value);
  };

  const handleVoteSubmit = () => {
    const candidate = candidates.find((c) => c.id === parseInt(selectedCandidate));
    if (candidate) {
      candidate.votes++;
      setSubmitted(true);
    }
  };

  const renderCandidates = () => {
    return candidates.map((candidate) => (
      <div key={candidate.id} className="mb-4">
        <label className="mr-2 pr-3">
          <input
            type="radio"
            value={candidate.id}
            checked={selectedCandidate === String(candidate.id)}
            onChange={handleCandidateSelection}
          />
          {candidate.name}
        </label>
      </div>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Vote for a Candidate</h1>
      {!submitted ? (
        <div className="w-96">
          <form>
            {renderCandidates()}
            <button
              type="button"
              onClick={handleVoteSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit Vote
            </button>
          </form>
        </div>
      ) : (
        <p>Thank you for voting!</p>
      )}
    </div>
  );
};

export default votingscreen;
