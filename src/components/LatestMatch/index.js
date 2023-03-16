import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatch

  const altText = `latest match ${competingTeam}`

  return (
    <div className="match-container">
      <div className="first-section">
        <p className="competing-team-title">{competingTeam}</p>
        <p className="competing-date">{date}</p>
        <p className="competing-venue">{venue}</p>
        <p className="competing-result">{result}</p>
      </div>
      <div className="second-section">
        <img src={competingTeamLogo} alt={altText} className="competing-logo" />
      </div>
      <div className="third-section">
        <h1 className="first-innings-title">First Innings</h1>
        <p className="first-innings-team">{firstInnings}</p>
        <h1 className="second-innings-title">Second Innings</h1>
        <p className="second-innings-team">{secondInnings}</p>
        <h1 className="man-title">Man Of The Match</h1>
        <p className="man-name">{manOfTheMatch}</p>
        <h1 className="umpires-title">Umpires</h1>
        <p className="umpires-names">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
