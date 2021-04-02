import React, { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';

const Alerts = () => {
    const AlertContext = useContext(alertContext);
    return (
      AlertContext.alerts.length && AlertContext.alerts.map((alert)=>(
          <div key={alert.id} className={`alert alert-${alert.type}`}>
              {alert.msg}
          </div>
    ))
    )
}

export default Alerts
