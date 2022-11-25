import React from 'react'
import { NextPage } from 'next' // needed for complex types
import { MdOutlineVideocamOff } from 'react-icons/md'
import { BiCommentX } from 'react-icons/bi'


interface IProps {
    text: string;
  }

// const NoResults: NextPage<IProps> = ({ text }) => { // needed for the complex types// has to have NextPage imported
const NoResults = ({ text }: IProps) => { //the basic

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">
        {/* <MdOutlineVideocamOff /> */}
        {text.includes('No Comments') 
          ? <BiCommentX /> 
          : <MdOutlineVideocamOff />}
      </p>
      <p className="text-2xl text-center">
        {text}
      </p>
    </div>
  )
}

export default NoResults