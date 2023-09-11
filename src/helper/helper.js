export const filterFn = (details,searchText) => {
    let searchData = details.filter(ele => ele.name.toLowerCase().includes(searchText))
    return searchData
}