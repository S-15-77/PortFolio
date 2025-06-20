import { useContext } from "react";
import { ThemeContext } from '../ThemeContext'
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { dark, toggleTheme } = useContext(ThemeContext);
    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            {!dark ? (
                <span role="img" aria-label="Light Mode">🌞</span>
            ) : (
                <span role="img" aria-label="Dark Mode">🌜</span>
            )}
        </button>
    );
}