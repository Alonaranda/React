import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForms';
import { activeNote, startDeleting } from '../../actions/notes';

export const NotesScreen = () => {

    const dispatch = useDispatch();

    const {active:note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset]  = useForm(note);
    //console.log(formValues);
    const {body, title, id} = formValues;

    //Saber si cambie de note
    const activeId = useRef(note.id);
    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset])

    //Saber si modifique el body y title
    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
    }, [formValues, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Your awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder="Tell me more!"
                    className="notes__textarea"
                    autoComplete="off"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    (note.url) &&
                <div className="notes__image">
                    <img
                        src={note.url}
                        alt="fotoSelected"
                    />

                </div>
            }


            </div>

            <button
                className="btn btn-danger"
                onClick={handleDelete}
            >Delete</button>

        </div>
    )
}
