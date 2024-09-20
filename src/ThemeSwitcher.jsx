import React from 'react';
import { useTheme } from './context'; 

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    light: {
      backgroundColor: '#ffffff',
      color: '#000000',
    },

    dark: {
      backgroundColor: '#333333',
      color: '#ffffff',
    },

    container: {
      padding: '20px',
      textAlign: 'center',
      height:'100vh',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    },

    button: {
      position:'absolute',
      top:'200px',
      left:'45%',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#ffffff',
    },
  };

  return (
    <div style={{ ...styles.container, ...styles[theme] }}>
      
      <button style={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
