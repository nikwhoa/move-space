const countTabs = (window) => {
  if (window.innerWidth <= 768) {
    return 3;
  }
  if (window.innerWidth <= 1024) {
    return 4;
  }
  if (window.innerWidth <= 1280) {
    return 5;
  }
  return 7;
};

export default countTabs;
