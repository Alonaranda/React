import React from 'react';
import { Sidebar } from './Sidebar';
import { NotesScreen } from '../notes/NotesScreen';
import { useSelector } from 'react-redux';
import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {

    const {active} = useSelector(state => state.notes)


    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            <Sidebar/>
            <main>

                {
                    (active) ? (<NotesScreen/>): (<NothingSelected/>)
                }
            </main>
        </div>
    )
}
