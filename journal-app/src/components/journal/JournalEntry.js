import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://fsb.zobj.net/crop.php?r=uG6igcbGjpIADM9nbwxkLYRH_ykV_rscYoprl1XrkXLdmLBctMpz3Ksv_q519NLNXeOcCxU6V38jdKKUtSoO1Vm3dYa1RSL7qSjeVMYl1sKYn5N0J1_cFPjaXvRdCuEdo_OL390RQ3L_xK5L)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Lorem snfefwf fwa fwfwdf sdfffffsfdsc.
                </p>
            </div>

            <div className="journal__entry-date-box"> 
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
