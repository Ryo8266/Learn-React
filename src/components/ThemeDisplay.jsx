import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/themeContext'

export default function ThemeDisplay() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#222222',
    color: theme === 'light' ? '#000000' : '#ffffff',
    height: '100vh',
  }

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#eeeeee' : '#444444',
    color: theme === 'light' ? '#000000' : '#ffffff',
  };

  return (
    <div style={appStyle}>
      <p>
        Theme: {theme === 'light' ? 'Light' : 'Dark'}
      </p>

      <button onClick={toggleTheme} style={buttonStyle}>
        [ Toggle Theme ]
      </button>
    </div>
  )
}
