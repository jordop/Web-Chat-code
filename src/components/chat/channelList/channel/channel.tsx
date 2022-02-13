import React, { Component } from 'react';

interface channelProps {
  id: number
  name: string
  participants: number
}

export default function Channel(props: channelProps) {
  return(
    <div className='p-2'>
      <h1 className="text-lg">{props.name}</h1>
      <span>{props.participants}</span>
    </div>
  )
}