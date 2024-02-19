import { useState } from "react";
import Button from "./Button";
import BillPayForm from "./BillPayForm";
import FriendsList from "./FriendsList";
import AddFriendForm from "./AddFriendForm";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showFriend, setShowFriend] = useState(true);
  const [selectFriend, setSelectFriend] = useState(null);
  function hanldeSelection(friend) {
    // setSelectFriend(friend);
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
  }
  function handleFrineds(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleFormShow() {
    setShowFriend((show) => !show);
  }
  function handleSpliting(value) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    console.log(selectFriend);

    console.log(value);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={hanldeSelection}
          selectFriend={selectFriend}
        />
        {showFriend && <AddFriendForm onAddFriend={handleFrineds} />}
        <Button onClick={handleFormShow}>
          {showFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectFriend && (
        <BillPayForm
          selectFriend={selectFriend}
          onSpliting={handleSpliting}
          key={selectFriend.id}
        />
      )}
    </div>
  );
}
