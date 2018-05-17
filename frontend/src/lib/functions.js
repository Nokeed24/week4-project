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

export const matchUsers = (allusers, currentUser, likes, allbreeds) => {
  console.log('All users in functions', allusers, currentUser)
  const likesMatches = allusers.filter(users =>
    users.likes === currentUser.likes)
  console.log(likesMatches, 'Matches by likes')
  // const breedsOfMatch = allbreeds.filter(likes =>
  //   likes.id === likesMatches.breed)
  // console.log(breedMatches, 'Matches by breed')
}
