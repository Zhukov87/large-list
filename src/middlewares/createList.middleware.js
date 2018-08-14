import uniqueId from "lodash/uniqueId";

export default store => next => action => {
  if (action.type === "CREATE_LIST") {
    const { listSize } = action.payload;
    action.payload.list = generateList(listSize);
  }
  next(action);
};

const generateList = listSize => {
  const generatedArray = [];
  for (let i = 0; i < listSize; i++) {
    generatedArray.push({
      label: uniqueId(),
      value: Math.round(Math.random() * 1000000000).toString()
    });
  }
  return generatedArray;
};
