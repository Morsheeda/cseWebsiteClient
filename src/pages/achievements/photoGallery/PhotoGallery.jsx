import React from 'react'
import "./PhotoGallery.css"

export default function PhotoGallery() {
  return <div className="photoGallery">
    <div className="photoGallerySource">
      <iframe scrolling='no' src="https://ist.edu.bd/gallery/" width="100%" height="533" frameborder="0"></iframe>
    </div>
    <div className="void"></div>
  </div>
}
