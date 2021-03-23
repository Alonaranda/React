import React from 'react';
import { Sidebar } from './Sidebar';
import { NotesScreen } from '../notes/NotesScreen';
//import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            <Sidebar/>
            <main>
                <NotesScreen/>
                {/*<NothingSelected/>*/}
            </main>
        </div>
    )
}
