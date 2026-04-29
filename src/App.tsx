import React from 'react';

const App: React.FC = () => (
  <div style={{ fontFamily: 'system-ui', maxWidth: 1200, margin: '0 auto', padding: 24 }}>
    <header style={{ background: 'linear-gradient(135deg, #1A1F36, #EB001B)', color: '#fff', padding: 32, borderRadius: 12, marginBottom: 24 }}>
      <h1>MC Merchant Portal</h1>
      <p>Transaction history, analytics, and dispute management</p>
    </header>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
      <Card title="Today's Volume" value="12,847" subtitle="transactions" color="#22c55e" />
      <Card title="Approval Rate" value="97.3%" subtitle="last 24h" color="#EB001B" />
      <Card title="Avg Transaction" value="$142.50" subtitle="USD" color="#f59e0b" />
    </div>
  </div>
);

const Card: React.FC<{title: string; value: string; subtitle: string; color: string}> = ({title, value, subtitle, color}) => (
  <div style={{ background: '#fff', borderRadius: 10, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderTop: '4px solid ' + color }}>
    <div style={{ fontSize: 13, color: '#888' }}>{title}</div>
    <div style={{ fontSize: 36, fontWeight: 800, color: '#1A1F36' }}>{value}</div>
    <div style={{ fontSize: 12, color: '#aaa' }}>{subtitle}</div>
  </div>
);

export default App;