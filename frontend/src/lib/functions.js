export const getBreedName = (url) => {
    {
        console.log("this is the url", url)
        const breedName = url.split('/')
        const newBreed = breedName[4]
        console.log("this is the breedname:", newBreed)
        return newBreed
    }
}
