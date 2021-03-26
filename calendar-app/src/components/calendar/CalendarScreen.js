import React, { useState } from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/es';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarModal } from './CalendarModal';
import { CalendarEvent } from './CalendarEvent';

import 'react-big-calendar/lib/css/react-big-calendar.css';


moment.locale('es');
const localizer = momentLocalizer(moment);

const events = [{
    title: 'Cumpleaños',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Comprar el pastel',
    user: {
        _id: '12345',
        name: 'Christian'
    }
}];

export const CalendarScreen = () => {

    //Mi variable que actualiza la ultima vista
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        //console.log(e);
    }

    const onSelectEvent = (e) => {
        //console.log(e);
    }

    const onViewChange = (e) => {
        //console.log(e);  --> Se si estoy en mes, semana, dia, agenda
        setLastView(e);
        localStorage.setItem('lastView', e);
    }

    const eventStyleGetter = (event,start, end, isSelected) => {
        //console.log(event,start, end, isSelected);
        const style = {
            backgroundColor: '#367CF7',
            borderRadius: '3px',
            opacity: 0.8,
            display: 'block',
            color: 'white'
        }
        return {
            style
        }
    };




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
                view={lastView}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal/>
        </div>
    )
}
