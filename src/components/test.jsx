// //

//

const InfoTopBar = ({ mess, color }) => {
  mess = mess || "Legendary Components";
  color = color || "w3-blue";
  return (
    <div className={`w3-bar ${color} w3-card`}>
      <h3 className="w3-center">{mess}</h3>
    </div>
  );
};

const InfoTopBar = ({ mess, color }) => {
  mess = mess || "Legendary Components";
  color = color || "w3-blue";
  return (
    <div className={`w3-bar ${color} w3-card`}>
      <h3 className="w3-center">{mess}</h3>{" "}
    </div>
  );
};
