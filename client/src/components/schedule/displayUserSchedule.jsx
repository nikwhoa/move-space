/* eslint-disable react/react-in-jsx-scope */
const displayUserSchedule = (schedule, user, day) => {
  console.log('user', user);
  return schedule
    .filter((item) => item.trainDay === day)
    .filter((item) => item.users.includes(user._id))
    .map((item) => (
      <div className='schedule__item'>
        <div className='schedule__item__title'>{item.scheduleItem}</div>
        <div className='schedule__item__time'>{item.TrainTime}</div>
      </div>
    ));
};

export default displayUserSchedule;
