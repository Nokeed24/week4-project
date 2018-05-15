export const getBreedName = (breed) => {
    {
        const breedName = breed.split('/')
        const newBreed = breedName[4]
        return newBreed
    }
}
