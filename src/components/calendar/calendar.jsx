import React from 'react';
import Toggle from '../button/toggle';

const Calendar = ({challenges}) => {
    return ( 
        <React.Fragment>
            <div className="calendar">
                <h1 className="days">{challenges.days}</h1>
                <div className="content">
                <Toggle
                    challenges={challenges}
                    />
                </div>
            </div>
        </React.Fragment>
        
     );
}
 
export default Calendar;