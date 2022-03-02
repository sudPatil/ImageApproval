// https://api.unsplash.com/photos/random?client_id=4km_mVKlEKcT_fJMV-gnffBB9XUrV0CXYKK1K9i9gzA

const URLS = {
  GET_USER : `https://api.unsplash.com/photos/random?client_id=4km_mVKlEKcT_fJMV-gnffBB9XUrV0CXYKK1K9i9gzA`
}

const GetUser = () => {
  return fetch(URLS.GET_USER).then((res) => res.json()).then((res) => {
    return { id: res.id, urls: res.urls}
  })
}

export {
  GetUser
}