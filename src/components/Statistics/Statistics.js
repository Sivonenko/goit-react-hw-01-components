import PropTypes from "prop-types";
import s from './statistics.module.scss'


const StatsListItem = ({ id, label, percentage }) => {
    return (
          <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}</span>
    </li>
    )
}
const StatsList = ({ items }) => {
    if (items.length === 0) return null
    return <ul className={s.statList}>{items.map(StatsListItem)}</ul>
}
const Statistics = ({items}) => {
    return (
        <section className={s.statistics}>
  <h2 className={s.title}>Upload stats</h2>

            <StatsList items={items}/>
                
</section>
    )
}
StatsListItem.propTypes = {
  label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics