import React from 'react';
import { JournalEntry } from './JournalEntry';
import { useSelector } from 'react-redux';

export const JournalEntries = () => {

    //const entries = [1,2,3,4,5];
    const {notes} = useSelector(state => state.notes);
    //console.log(notes);

    return (
        <div className="journal__entries animate__animated animate__fadeIn animate__faster">
            {
                notes.map(note => (
                    <JournalEntry 
                        key={note.id}
                        {...note} 
                    />
                ))
            }
        </div>
    )
}
