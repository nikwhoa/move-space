const getDatesOfWeek = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  const monday = new Date(currentDate);
  const tuesday = new Date(currentDate);
  const wednesday = new Date(currentDate);
  const thursday = new Date(currentDate);
  const friday = new Date(currentDate);
  const saturday = new Date(currentDate);
  const sunday = new Date(currentDate);

  monday.setDate(currentDate.getDate() - currentDay + 1);
  tuesday.setDate(currentDate.getDate() - currentDay + 2);
  wednesday.setDate(currentDate.getDate() - currentDay + 3);
  thursday.setDate(currentDate.getDate() - currentDay + 4);
  friday.setDate(currentDate.getDate() - currentDay + 5);
  saturday.setDate(currentDate.getDate() - currentDay + 6);
  sunday.setDate(currentDate.getDate() - currentDay + 7);

  const daysOutput = (day) => {
    return day.toLocaleString('uk-UA', {
      day: 'numeric',
      month: 'long',
    });
  };

  return {
    monday: daysOutput(monday),
    tuesday: daysOutput(tuesday),
    wednesday: daysOutput(wednesday),
    thursday: daysOutput(thursday),
    friday: daysOutput(friday),
    saturday: daysOutput(saturday),
    sunday: daysOutput(sunday),
  };
};

export default getDatesOfWeek;
