import PropTypes from 'prop-types';
import s from './FriendItem.module.css'
const FriendsItem = ({ id, avatar, name, isOnline }) => {
    const statusClassName = isOnline ? s.online : s.offline
    return (
        <li key={id} className={s.item}>
            <span className={statusClassName}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}
FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsItem