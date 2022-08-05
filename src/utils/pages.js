export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages) => {
  const pagesArray = [];

  for (let i = 0; i < totalPages; i += 1) {
    pagesArray.push(i + 1)
  }

  return pagesArray;
}
