import React, { useContext } from 'react'
// sử dụng ThemeContext
import { ThemeContext } from './DemoContext'

function DemoContext2() {
    // lấy theme từ ThemeContext
    const theme = useContext(ThemeContext)
  return (
    <div>
      <h4>Demo context 2</h4>
      <p className={theme}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo inventore distinctio illo quibusdam beatae commodi maxime sint obcaecati itaque architecto totam voluptate enim molestias repellat consequatur nostrum quia, nesciunt aut?</p>
    </div>
  )
}

export default DemoContext2
