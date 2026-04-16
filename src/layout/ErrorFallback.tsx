import type { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorFallback.module.scss";
import Button from "@/shared/components/ui/button/Button";

const ErrorFallback = ({
  resetErrorBoundary,
}: FallbackProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorCard}>
        <h1 className={styles.title}>Something went wrong</h1>

        <p className={styles.subtitle}>
          The application hit an unexpected error.
        </p>

        <div className={styles.buttonGroup}>
          <Button
            caption="Try again"
            onClick={resetErrorBoundary}
            isActive={true}
          />

          <Button
            caption="Return home"
            onClick={() => {
              resetErrorBoundary();
              navigate("/");
            }}
            isActive={true}

          />
        </div>
      </div>
    </div>
  );
};

export default ErrorFallback;