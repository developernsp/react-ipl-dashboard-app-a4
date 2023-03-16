import {Component} from 'react'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {banner: '', latestMatchDetails: {}, recentMatches: []}

  componentDidMount() {
    this.getTeamMatch()
  }

  getTeamMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    // console.log(data.recent_matches[0])

    const teamBannerUrl = data.team_banner_url

    this.setState({banner: teamBannerUrl})

    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      result: data.latest_match_details.result,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      umpires: data.latest_match_details.umpires,
    }
    this.setState({latestMatchDetails})

    const recentMatches = data.recent_matches.map(recentMatch => ({
      competingTeamLogo: recentMatch.competing_team_logo,
      competingTeam: recentMatch.competing_team,
      result: recentMatch.result,
      matchStatus: recentMatch.match_status,
    }))

    this.setState({recentMatches})
  }

  render() {
    const {banner, latestMatchDetails, recentMatches} = this.state

    console.log(banner)
    console.log(latestMatchDetails)
    console.log(recentMatches)

    return (
      <div className="team-details-container" testid="loader">
        <div className="banner-container">
          <img src={banner} alt="team banner" className="banner" />
        </div>

        <div>
          <LatestMatch latestMatch={latestMatchDetails} />
        </div>

        <ul className="items-container">
          {recentMatches.map(eachMatch => (
            <MatchCard match={eachMatch} key={eachMatch.competingTeam} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
