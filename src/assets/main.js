const API = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=6Vzbc4bolf8VZgDhc524Ck&offset=0&limit=8';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
		'X-RapidAPI-Key': '8565d1ba93msh974680e057f416ap139ae3jsne9acb6739a5e',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const tracks = await fetchData(API);
    let view = `
    ${tracks.items.map(track => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${track.track.album.images[0].url}" alt="${track.track.name}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${track.track.name}
          </h3>
        </div>
      </div>
    `).slice(0, 4).join('')}
    `;
    content.innerHTML = view;
  } catch(err){
    content.innerHTML = '<h1 class="text-3xl text-center" >Sorry... error, could not find server.</h1>';
  }
})();