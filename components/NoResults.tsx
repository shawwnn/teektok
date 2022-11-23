import React from 'react'
import { NextPage } from 'next' // needed for complex types

interface IProps {
    text: string;
  }

// const NoResults: NextPage<IProps> = ({ text }) => { // needed for the complex types// has to have NextPage imported
const NoResults = ({ text }: IProps) => { //the basic

  return (
    <div>NoResults</div>
  )
}

export default NoResults