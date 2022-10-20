import { Component, ErrorInfo, ReactNode } from "react";

type ErrorBoundryProps = {
  children?: ReactNode;
};

type ErrorBoundryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundryProps, ErrorBoundryState> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // IRL would log to an error reporting serive
    //errorService.log({ error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-error-boundry" role="alert">
          <div className="app-error-boundry__content">
            <h1 className="app-error-boundry__title">Something went wrong.</h1>
            <button
              type="button"
              className="app-error-boundry__btn btn"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
