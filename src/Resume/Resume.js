import React from 'react'
import Data from '../resume.data'
import './resume.css'
export default () => (
  <div className={'main'}>
    <div className={'container'}>
      <div className="resume">
        <div className={'side'}>
          <div>{Data.name}</div>
          <div>{Data.title}</div>
        </div>
        <div className={'content'}>
          <div>{Data.description}</div>
        </div>
      </div>
    </div>
  </div>
)
