import React from 'react'

const SeasonItem = ({season}) => {
  return (

    <li className={season.currentSeason ? 'active' : 'waves-effect'}><a href="#!">{season.name}</a></li>
  )
}

export default SeasonItem
