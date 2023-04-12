import React from 'react'
import Avatar from './Avatar'

export default function MemberInfor(props) {
  return (
    <div>
      <Avatar link={props.info.path} />
      <h2>Tên:{props.info.name}</h2>
      <h3>Tuổi:{props.info.age}</h3>
    </div>
  )
}
