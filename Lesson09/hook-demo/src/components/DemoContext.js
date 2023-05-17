import React, { createContext, useState } from 'react'
import DemoContext1 from './DemoContext1'
// Tạo ngữ cảnh\
export const ThemeContext = createContext();

function DemoContext() {
    // khởi tạo state
    const [theme, setTheme] = useState('black');
    // thay đổi theme thông qua sự kiện
    const toggleTheme = () =>{
        setTheme(theme==='black'?'blue':'black');
    }

  return (
    // truyền dữ liệu từ ngữ cảnh ThemeContext
    <ThemeContext.Provider value={theme}>
        <div className='container border'>
            <h2>Demo 1 Context - useContext</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <DemoContext1 />
        </div>
    </ThemeContext.Provider>
  )
}

export default DemoContext
