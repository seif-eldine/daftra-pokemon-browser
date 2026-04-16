import styles from "./Skeleton.module.scss";

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
    className?: string;
}

const Skeleton = ({
    width = "100%",
    height = "1rem",
    borderRadius = "4px",
    className = "",
}: SkeletonProps) => {
    const widthStyle = typeof width === "number" ? `${width}px` : width;
    const heightStyle = typeof height === "number" ? `${height}px` : height;

    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{
                width: widthStyle,
                height: heightStyle,
                borderRadius,
            }}
        />
    );
};

export default Skeleton;
