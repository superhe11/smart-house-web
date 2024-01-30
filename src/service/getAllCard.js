export async function getAllCard() {
	const res = await fetch('http://localhost:3000/api/info');

	if (!res.ok) throw new Error('Error fetching all cards');

	return res.json();
}
