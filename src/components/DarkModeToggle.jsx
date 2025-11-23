import react from 'react';

const DarkModeToggle = ({darkMode, onToggle}) => {
    return (
        <div>
            <button onClick={onToggle}>Toggle {darkMode ? 'Light' : 'Dark'} Mode</button>
        </div>
    );
};

export default DarkModeToggle;  