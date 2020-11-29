import PropTypes from "prop-types";
import FriendItem from "./FriendItem";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendlist}>{friends.map(FriendItem)}</ul>;
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
