const BASE = process.env.REACT_APP_API_BASE || '';


export async function sendContact(data) {
  const res = await fetch(
    `${BASE}/api/contact`,      
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  );
  return res.json();
}
