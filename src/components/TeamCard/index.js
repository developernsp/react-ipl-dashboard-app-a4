import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team
  const path = `/team-matches/${id}`

  return (
    <li className="item-container">
      <Link to={path}>
        <img src={teamImageUrl} alt={name} className="team-img" />

        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
