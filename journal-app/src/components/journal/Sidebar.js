import React from 'react';
import { JournalEntries } from './JournalEntries';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';

export const Sidebar = () => {

    const {name} = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const handleLogout = () => {
        //console.log('Logout');
        dispatch(startLogout());
    }

    const handleAddNew = () => {
        dispatch(startNewNote());
    }

    return (
        <aside className="journal__sidebar ">
            <div className="journal__sidebar-navbar animate__animated animate__fadeDown animate__faster">
                <h3 className="mt-5">
                    <i className="fas fa-moon"></i><span>&nbsp;{name}</span>
                </h3>

                <button
                    className="btn"
                    onClick={handleLogout}
                >Logout</button>

            </div>

            <div 
                className="journal__new-entry"
                onClick={handleAddNew}
            >
                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-5">
                    New Entry
                </p>
            </div>

            <JournalEntries/>
        </aside>
    )
}
