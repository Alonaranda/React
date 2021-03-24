import React from 'react';
import { JournalEntries } from './JournalEntries';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        //console.log('Logout');
        dispatch(startLogout());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="fas fa-moon"></i><span>&nbsp;Christian</span>
                </h3>

                <button
                    className="btn"
                    onClick={handleLogout}
                >Logout</button>

            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-5">
                    New
                </p>
            </div>

            <JournalEntries/>
        </aside>
    )
}