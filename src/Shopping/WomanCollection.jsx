import React from 'react'

const WomanCollection = (props) => {
    const{title,image1,image2,image3,image4,image5,image6,image7,image8} = props.ladiesFashion

  return (
    <div className = "collectionSections">
        <h2>{title}</h2>
        <img src = 'assets/LadiesBanner.gif'/>
        <div className="menImages">
            <img src = {image1} alt={title}/>
            <img src = {image2} alt={title} />
            <img src = {image3} alt={title} />
            <img src = {image4} alt={title} />
            <img src = {image5} alt={title} />
            <img src = {image6} alt={title} />
            <img src = {image7} alt={title} />
            <img src = {image8} alt={title} />
        </div>
    </div>
  )
}

export default WomanCollection