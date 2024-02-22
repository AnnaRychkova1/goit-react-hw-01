import FriendCard from '../FriendCard/FriendCard';
import css from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendItems}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.friendDescr}>
            <FriendCard
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
