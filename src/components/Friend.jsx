import React from "react";
import Button from "./Button.jsx";

function Friend({ friend, onSelection, selectedFriend }) {
  const { id, name, image, balance } = friend;
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">
          You owe {name} ${Math.abs(balance)}
        </p>
      )}

      {balance > 0 && (
        <p className="green">
          {name} owes you ${balance}
        </p>
      )}

      {balance === 0 && <p className="">You and {name} are even</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "select"}
      </Button>
    </li>
  );
}

export default Friend;
