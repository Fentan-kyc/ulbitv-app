export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (pages) => {
    let result = []
    for (let index = 0; index < pages; index++) {
        result.push(index + 1)
      }
      return result;
}