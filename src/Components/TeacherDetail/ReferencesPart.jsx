const ReferencesPart = ({ arrayOfRefs }) => {
  let listItems;
  const filledItems = Array.from(
    { length: 10 },
    (_, index) => arrayOfRefs[index] || ''
  );

  return (
    <ol className="mb-5 list-group list-group-numbered">
      {filledItems.map((item, index) => {
        return (
          <li key={index} className="list-group-item">
            {item}
          </li>
        );
      })}
      {arrayOfRefs.length > 10
        ? arrayOfRefs.slice(10).map((item, index) => {
            return (
              <li key={index + 10} className="list-group-item">
                {item}
              </li>
            );
          })
        : null}
    </ol>
  );
};

export default ReferencesPart;
