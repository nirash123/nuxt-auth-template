import {axiosIns, storeIns} from '~/services/axios'
import apiResource from '~/services/api_utils'

export const defaultPath = "/api/organizations"

export const getUserData = key => storeIns.$auth.$storage.getUniversal(key)

export default {
  ...apiResource(defaultPath),
  teams: (id = getUserData('organization').id) => ({
    ...apiResource(`${defaultPath}/${id}/team`),
    syncRole: (teamId = getUserData('team').id,payload) => axiosIns.post(`${defaultPath}/${id}/team/${teamId}/sync`, payload),
    sessions: (teamId = getUserData('team').id) => apiResource(`${defaultPath}/${id}/team/${teamId}/sessions`),
  })
}
