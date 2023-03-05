const getDay = (setActiveTab) => {
  const date = new Date();
  const day = date.getDay();
  if (day === 0) {
    setActiveTab(6);
  }
  setActiveTab(day - 1);
};

export default getDay;
