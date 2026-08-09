import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Login() {
  useDocumentTitle('Login - CaptionFlow');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-surface-100 to-surface-50 py-16 px-4">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-surface-200 bg-white/70 p-8 shadow-card backdrop-blur">
          <div className="mb-6 flex rounded-lg border border-surface-200 bg-surface-50 p-1">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 rounded-md py-2 text-sm font-semibold transition-all duration-300 ${
                isLogin ? 'bg-white text-primary shadow-card' : 'text-ink-muted hover:text-ink'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 rounded-md py-2 text-sm font-semibold transition-all duration-300 ${
                !isLogin ? 'bg-white text-primary shadow-card' : 'text-ink-muted hover:text-ink'
              }`}
            >
              Register
            </button>
          </div>

          <h2 className="mb-6 text-center font-display text-2xl font-bold text-ink">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-lg border border-surface-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink transition-colors duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-surface-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink transition-colors duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-lg border border-surface-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink transition-colors duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full rounded-lg border border-surface-200 bg-white py-2.5 pl-10 pr-4 text-sm text-ink transition-colors duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            )}

            <button
              type="submit"
              className="btn-glow w-full rounded-lg bg-gradient-to-r from-primary to-accent py-3 font-semibold text-white transition-all duration-300 hover:brightness-105"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-ink-muted">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-primary hover:underline"
            >
              {isLogin ? 'Register' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
