import './index.css'

const MatchCard = props => {
  const {match} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = match

  const altTxt = `competing team ${competingTeam}`
  return (
    <li className="card-container">
      <img src={competingTeamLogo} alt={altTxt} className="card-logo" />
      <p className="card-title">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className="card-status">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
