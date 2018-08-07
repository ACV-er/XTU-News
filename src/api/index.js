import http from 'axios'

export const URL_BASE = 'https://xtunews.kilingzhang.com/phpcms-api'

export function getHomeInfo() {
  const url = `${URL_BASE}/home.php`
  return http.get(url)
}

export function getNewsByPage(page, limit = 10) {
  const url = `${URL_BASE}/newslist.php?letter=zonghexinwen&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getNewsByNewsId(id) {
  const url = `${URL_BASE}/news.php?news_id=${id}`
  return http.get(url)
}

export function getMediaNewsByPage(page, limit = 10) {
  const url = `${URL_BASE}/newslist.php?letter=meitixiangda&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getFaxByPage(page, limit = 10) {
  const url = `${URL_BASE}/newslist.php?letter=yuanxichuanzhen&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getVideoByPage(page, limit = 10) {
  const url = `${URL_BASE}/newslist.php?letter=shipinxinwen&page=${page}&limit=${limit}`
  return http.get(url)
}

export function getHotSpots(limit = 5) {
  const url = `${URL_BASE}/hotlist.php?limit=${limit}`
  return http.get(url)
}

export function handleError(e) {
  console.log(e)
}
