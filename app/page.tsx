export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Test Application</h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>Successfully deployed to Vercel!</p>
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '8px'
      }}>
        <p>✅ Next.js App Router</p>
        <p>✅ TypeScript</p>
        <p>✅ Ready for production</p>
      </div>
    </main>
  )
}
