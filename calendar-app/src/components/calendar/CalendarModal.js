import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import Swal from 'sweetalert2';
import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdated } from '../../actions/events';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
Modal.setAppElement('#root');


const now = moment().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
    title: '',
    notes: '',
    start: moment(now).toDate(),
    end: moment(nowPlus1).toDate()
}


export const CalendarModal = () => {

    const { modalOpen } = useSelector(state => state.ui);
    const { activeEvent } = useSelector(state => state.calendar);
    const dispatch = useDispatch();


    const [dateStart, setDateStart] = useState(now.toDate());
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());
    const [formValues, setFormValues] = useState(initEvent);

    const [tituloValid, setTituloValid] = useState(true);

    const {title, notes, start, end} = formValues;


    useEffect(() => {
        //console.log(activeEvent);
        if(activeEvent) {
            setFormValues(activeEvent);
        }else{
            setFormValues(initEvent);
        }
    }, [activeEvent, setFormValues])




    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const closeModal = () => {
        //console.log('Cerrando modal');
        dispatch(uiCloseModal());
        dispatch(eventClearActiveEvent());
        setFormValues(initEvent);
    }

    //Definir mi fecha de inicio
    const handleStartDateChange = (e) => {
        //console.log(`Me regresa una fecha de inicio: ${e}`);
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }

    //Definir mi fecha de inicio
    const handleEndDateChange = (e) => {
        //console.log(`Me regresa una fecha de fin: ${e}`);
        setDateEnd(e);
        setFormValues({
            ...formValues,
            end: e
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        //console.log(formValues);

        const momentStart = moment(start);
        const momentEnd = moment(end);

        if(momentStart.isSameOrAfter(momentEnd)){
            console.log('Fecha fin debe de ser mayor');
            return Swal.fire('Error', 'Fecha fin debe ser mayor', 'error')
        }

        if(title.length < 2){
            console.log('Te falto el titulo');
            return setTituloValid(false);
        }

        if(activeEvent){
            dispatch(eventStartUpdated(formValues));
        }else {
            dispatch(eventStartAddNew({
                ...formValues,
            }));
        }

        setTituloValid(true);
        closeModal();

    }


    return (
        <Modal
            isOpen={modalOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            className="modal"
            overlayClassName="modal-fondo"
        >
            <h1>{(activeEvent)? 'Editar evento...' : 'Nuevo evento!'} </h1>
            <hr />
            <form   
                className="container"
                onSubmit={handleSubmitForm}
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        onChange={handleStartDateChange}
                        value={dateStart}
                        className="form-control"
                        format="y-MM-dd h:mm:ss a"
                        amPmAriaLabel="Select AM/PM"
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        className="form-control"
                        format="y-MM-dd h:mm:ss a"
                        amPmAriaLabel="Select AM/PM"
                        minDate={dateStart}
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${!tituloValid && "is-invalid"} `}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={handleInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>

        </Modal>
        
    )
}
