import {axiosIns} from '@/services/axios'

export default baseUrl => ({
  index: filters => axiosIns.get(`${baseUrl}?${filters || ''}`),
  indexWithoutPagination: () => axiosIns.get(`${baseUrl}?noPagination=true`),
  indexSearch: (searchText = '') => axiosIns.get(`${baseUrl}?search=${encodeURIComponent(searchText)}`),
  create: payload => axiosIns.post(baseUrl, payload),
  view: id => axiosIns.get(`${baseUrl}/${id}`),
  update: (id, payload) => axiosIns.put(`${baseUrl}/${id}`, payload),
  delete: id => axiosIns.delete(`${baseUrl}/${id}`),
})
