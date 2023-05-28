import CandidateForm from '@/components/CandidateForm';
import WinnerDisplay from '@/components/WinnerDisplay';
import React, { useState } from 'react'

export default function adminpanel() {

    const [winner, setWinner] = useState("Garvit");

    const handleFormSubmit = (candidateId) => {
        // Perform logic to check the winner based on the candidate ID
        // Replace this with your actual implementation

        // For example, if candidate ID 1 is the winner:
        if (candidateId === '1') {
            setWinner('Candidate 1');
        } else {
            setWinner(null);
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-8">Polls</h1>
            <div className="w-96">
                <CandidateForm onFormSubmit={handleFormSubmit} />
                <WinnerDisplay winner={winner} />
            </div>
        </div>
    )
}
