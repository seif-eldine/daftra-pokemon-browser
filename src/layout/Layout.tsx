import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

const Layout = () => {
  return (
    <main>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Outlet />
      </ErrorBoundary>
    </main>
  );
};

export default Layout;