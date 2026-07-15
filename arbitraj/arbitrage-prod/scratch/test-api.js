async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/admin/users');
    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Body:', text);
  } catch (err) {
    console.error('Fetch failed:', err.message);
  }
}
test();
