import styles from "./Button.module.scss";

interface ButtonProps {
    caption: string;
    onClick: () => void;
    isActive?: boolean;
}

const Button = ({ caption, onClick, isActive }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${isActive ? styles.active : ""}`}
            onClick={onClick}
        >
            {caption}
        </button>
    );
};

export default Button;