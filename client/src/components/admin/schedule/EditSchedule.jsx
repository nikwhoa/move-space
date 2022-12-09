import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditSchedule = () => {
    const [schedulesName, setScheduleName] = useState('');
    const [scheduleDate, setScheduleDate] = useState({});
    const [scheduleTrainer, setScheduleTrainer] = useState('');
    const [user, setUser] = useState(null);

    const { isLoading } = useSelector((state) => state.schedule);

    const scheduleID = useParams().id;

    return <div>EditSchedule</div>;
};

export default EditSchedule;
