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
  console.log('All breeds in functions', allbreeds)
  const likesMatches = allusers.filter(users =>
    users.likes === currentUser.likes)
  console.log(likesMatches, 'Matches by likes')
  // const breedsOfMatch = allbreeds.filter(breed => {
  //   console.log(allbreeds.indexOf(breed))
  //   if(allbreeds.indexOf(breed) < likesMatches.length)
  //   {return breed.id === likesMatches[allbreeds.indexOf(breed)].id}})
  //   console.log(breedsOfMatch, 'Matches by breed')
  // const commonLikes = likes.filter(breed =>
  //   breed.breed === breedsOfMatch[likes.indexOf(breed)].breed)
  //   console.log(commonLikes, 'COMMON likes')
}
