import React from 'react'
import "./NUnotices.css"

export default function NUnotices() {
  return <div className="NUnotices">
    <div className="NUnoticeSource">
      <iframe scrolling='no' src="https://www.nu.ac.bd/recent-news-notice.php" frameborder="0"></iframe>
    </div>
  </div>

}
