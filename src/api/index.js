import http from 'axios'

export const URL_BASE = 'https://wptest.acver.xyz'

export function getHomeInfo() {
  const url = `${URL_BASE}?letter=home`
  return http.get(url)
}

export function getNewsByPage(page, limit = 10) {
  const url = `${URL_BASE}?letter=zonghexinwen&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getNewsByNewsId(id) {
  const url = `${URL_BASE}?news_id=${id}`
  return http.get(url)
}

export function getMediaNewsByPage(page, limit = 10) {
  const url = `${URL_BASE}?letter=meitixiangda&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getFaxByPage(page, limit = 10) {
  const url = `${URL_BASE}?letter=yuanxichuanzhen&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getVideoByPage(page, limit = 10) {
  const url = `${URL_BASE}?letter=shipinxinwen&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getMarkByPage(page, limit = 10) {
  const url = `${URL_BASE}?letter=xiangdarenwu&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getHotSpots(limit = 5) {
  const url = `${URL_BASE}?letter=jinqiredian&limit=${limit}`
  return http.get(url)
}

export function PostContribute(title, author, tel, belongs, mark, file) {
  const url = 'https://xtunews.kilingzhang.com/phpcms-api/addContent.php'
  return http.post(url, {
    title,
    author,
    tel,
    belongs,
    mark,
    file
  }, {
    headers: {'Content-Type': 'multipart/form-data'}
  })
}

export function handleError(e) {
  console.log(e)
}
