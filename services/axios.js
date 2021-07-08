export let axiosIns = null
export let storeIns = null

export default (axios,store) => {
  axiosIns = axios
  storeIns = store
}
