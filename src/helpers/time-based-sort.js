const timeBasedSort = (arr) => {
  const arrCopy = [...arr];
  arrCopy.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));
  return arrCopy;
};

export default timeBasedSort;
