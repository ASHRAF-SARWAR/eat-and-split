import Button from "./Button";
export default function Friend({ friend, onSelection, selectFriend }) {
  const isSelected = selectFriend?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owes {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your friend {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && (
        <p className="blue">You and Your friends are even!</p>
      )}
      <Button onClick={(e) => onSelection(friend)} key={friend.id}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
