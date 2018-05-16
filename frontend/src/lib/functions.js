export const getBreedName = (url) => {
    {
        const breedName = url.split('/')
        const newBreed = breedName[4]
        return removeSubBreed(newBreed)
    }
}

const removeSubBreed = (breedName) => {
    if (breedName.includes('-'))
    {
        const finalBreedName = breedName.split('-')
        return finalBreedName[0]
    }
    else
    {
        return breedName
    }

}
