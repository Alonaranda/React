import React from 'react';
import moment from 'moment';
import { activeNote } from '../../actions/notes';
import { useDispatch } from 'react-redux';

//const imagen = 'https://fsb.zobj.net/crop.php?r=uG6igcbGjpIADM9nbwxkLYRH_ykV_rscYoprl1XrkXLdmLBctMpz3Ksv_q519NLNXeOcCxU6V38jdKKUtSoO1Vm3dYa1RSL7qSjeVMYl1sKYn5N0J1_cFPjaXvRdCuEdo_OL390RQ3L_xK5L';

export const JournalEntry = ({id, date, title, body, url}) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();

    const handleEntryClick = () => {
        dispatch(activeNote(id, {
            date, title, body, url
        }));
    }

    return (
        <div 
            className="journal__entry pointer"
            onClick={handleEntryClick}
        >
            {
            url &&
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
            ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box"> 
                <span>{noteDate.format('dddd')}</span>
                <h4>{noteDate.format('Do')}</h4>
            </div>
        </div>
    )
}
