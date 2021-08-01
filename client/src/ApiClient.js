import postTextHandler from './App';

const baseURL = 'https://localhost:3010/texts' // need to connect to postman

export const getText = async () => {
  const res = await fetch(baseURL);
  return await res.json();
}


export const postText = async (content) => {
  // console.log('before res');
  const res = await fetch(baseURL, {
    method: 'POST',
    body: JSON.stringify({ content }),
    headers: { "Content-type": "application/json" },
  });
  // console.log('res', res);
  // .then((res) => res.json());
  return await res.json();
}

