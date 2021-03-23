import React from 'react'
import { NotesAppBar } from './NotesAppBar';

export const NotesScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Your awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="Tell me more!"
                    className="notes__textarea"
                    autoComplete="off"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="http://fc05.deviantart.net/fs70/f/2010/131/8/9/Moon__s_Eye_1920_x_1200_by_AngelofChaos91.png"
                        alt="fotoSelected"
                    />

                </div>


            </div>
        </div>
    )
}
