import './App.css'

function App() {
  return (
    <main className="page">
      <div className="glow glow-a" />
      <div className="glow glow-b" />

      <div className="content">
        <span className="eyebrow">Coding Shortcut</span>
        <h1>
          Something fast
          <br />
          is on the way.
        </h1>
        <p>We&apos;re building the shortcut. Check back soon.</p>

        <form
          className="notify"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="you@example.com"
            aria-label="Email address"
            required
          />
          <button type="submit">Notify me</button>
        </form>
      </div>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Coding Shortcut
      </footer>
    </main>
  )
}

export default App
