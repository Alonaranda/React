import React, { useEffect, useState } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarModal } from './CalendarModal';
import { CalendarEvent } from './CalendarEvent';
import { useDispatch, useSelector } from 'react-redux';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { uiOpenModal } from '../../actions/ui';
import { eventSetActive, eventClearActiveEvent, eventStartLoading } from '../../actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment);

//Informacion muestra -- borrar
// const events = [{
//     title: 'Cumpleaños',
//     start: moment().toDate(),
//     end: moment().add(2, 'hours').toDate(),
//     bgcolor: '#fafafa',
//     notes: 'Comprar el pastel',
//     user: {
//         _id: '12345',
//         name: 'Christian'
//     }
// }];

export const CalendarScreen = () => {

    const {events, activeEvent} = useSelector(state => state.calendar);
    const {uid} = useSelector(state => state.auth)
    //console.log(events);

    const dispatch = useDispatch();

    //Mi variable que actualiza la ultima vista
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch])

    const onDoubleClick = (e) => {
        //console.log(e);
        console.log('Abrir modal --> Doble Click');
        dispatch(uiOpenModal());
        
    }

    const onSelectEvent = (e) => {
        //console.log(e);
        dispatch(eventSetActive(e));
        
    }

    const onViewChange = (e) => {
        //console.log(e);  --> Se si estoy en mes, semana, dia, agenda
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    
    const eventStyleGetter = (event,start, end, isSelected) => {
        //console.log(event);
        //console.log(event,start, end, isSelected);
        const style = {
            backgroundColor: (uid === event.user._id) ? '#367CF7' : '#465660',
            borderRadius: '3px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    };

    const onSelectSlot = (e) => {
        //Podemos hacer evento seleccionando un espacio vacio 
        dispatch(eventClearActiveEvent());
    }




    return (
        <div className="calendar-screen">
            <Navbar/>

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                onSelectSlot={onSelectSlot}
                selectable={true}
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <AddNewFab/>
            {
                (activeEvent !== null) &&
                 <DeleteEventFab/>
            }

            <CalendarModal/>
        </div>
    )
}
