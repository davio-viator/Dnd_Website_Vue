const url = 'http://localhost:3080'

export async function getAllCards(){
  const response = await fetch(`${url}/api/cards`);
  return await response.json();
}

export async function createCard(data) {
  const response = await fetch(`${url}/api/card`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({card: data})
    })
  return await response.json();
}

