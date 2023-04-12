import React from 'react'

export default function ArrowFunction() {
    const Member = (props)=>{
        return(
            <>
                <hr/>
                <h2>Tôi là ArrowFunction</h2>
                <h3>Welcome to, {props.info}</h3>
            </>
        )
    }
  return (
    <div>
      <Member info="Chúng tôi là những chiến sỹ code thực chiến" />
    </div>
  )
}