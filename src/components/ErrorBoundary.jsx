import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Portfolio render error', error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    const isSpanish = typeof document !== 'undefined' && document.documentElement.lang === 'es';

    return (
      <main className="not-found section-pad" role="alert">
        <h1>{isSpanish ? 'No pudimos cargar esta página' : 'We could not load this page'}</h1>
        <p>
          {isSpanish
            ? 'Ocurrió un error inesperado. La página principal sigue disponible.'
            : 'An unexpected error occurred. The home page is still available.'}
        </p>
        <a className="btn primary" href="/">
          {isSpanish ? 'Volver al inicio' : 'Back to home'}
        </a>
      </main>
    );
  }
}
