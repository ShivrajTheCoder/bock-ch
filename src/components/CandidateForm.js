import React, { useState } from 'react';

const CandidateForm = ({ onFormSubmit }) => {
    const [candidateId, setCandidateId] = useState('');

    const handleCandidateIdChange = (event) => {
        setCandidateId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(candidateId);
    };

    return (
        <div className="bg-blue-500 p-4 text-white">
            <h1 className="text-3xl font-bold mb-4">Enter Candidate ID</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={candidateId}
                    onChange={handleCandidateIdChange}
                    className="border rounded-md px-2 py-1 mb-4"
                />
                <button
                    type="submit"
                    className="bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                    Add Candidate
                </button>
            </form>
        </div>
    );
};

export default CandidateForm;
