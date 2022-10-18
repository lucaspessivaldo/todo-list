import React from 'react'
import { AiOutlineCloudSync, AiOutlineClockCircle, AiOutlineSisternode } from 'react-icons/ai'

export default function FeatureSection() {
  return (
    <>
      <h1 className='feature-section-text'>
        Few reasons why you should choose Todo.
      </h1>

      <div className='featurelist-container'>

        <div className='feature-list-item'>
          <AiOutlineCloudSync className='feature-list-icon' />
          <p className='feature-item-maintext'>Sync</p>
          <p className='feature-item-descriptiontext'>All your data is storage on the cloud</p>
        </div>

        <div className='feature-list-item'>
          <AiOutlineClockCircle className='feature-list-icon' />
          <p className='feature-item-maintext'>Zero configuration</p>
          <p className='feature-item-descriptiontext'>Just use it</p>
        </div>

        <div className='feature-list-item'>
          <AiOutlineSisternode className='feature-list-icon' />
          <p className='feature-item-maintext'>Subtasks</p>
          <p className='feature-item-descriptiontext'>Create subtasks easy</p>
        </div>

      </div>
    </>
  )
}
