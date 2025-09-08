const trendingMovies = [
    'https://image.tmdb.org/t/p/w500/xqR4ABkFTFYe8NDji3knwWX7zfn.jpg',
    'https://image.tmdb.org/t/p/w500/9O1Iy9od7zuA6cW4byNxKkddkOD.jpg',
    'https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg',
    'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    'https://image.tmdb.org/t/p/w500/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg',
    'https://image.tmdb.org/t/p/w500/cP8YNGzGd47wLsCmWYkzD86z8AE.jpg',
  ];
  
  const trendingContainer = document.getElementById('trending');
  
  trendingMovies.forEach((posterUrl) => {
    const img = document.createElement('img');
    img.src = posterUrl;
    img.classList.add('row__poster');
    trendingContainer.appendChild(img);
  });
  