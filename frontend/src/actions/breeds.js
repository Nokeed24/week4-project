export const FETCHED_DETAILED_BREED = 'FETCHED_DETAILED_BREED'
export const FETCHED_ALL_BREEDS = 'FETCHED_ALL_BREEDS'

export const oneBreed = (action) => {
  return {
    type: FETCHED_DETAILED_BREED,
    payload: action
  }
}

export const allBreeds = (action) => {
  return {
    type: FETCHED_ALL_BREEDS,
    payload: action
  }
}
