export const getValueFromSnapshot = (querySnapshot) => {
  const data = [];
  querySnapshot.forEach(function (doc) {
    var obj = doc.data();
    obj.id = doc.id;
    data.push(obj);
  });
  return data;
};
