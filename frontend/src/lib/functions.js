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

export const matchUsers = (allUsers, currentUser) => {
  console.log('All users in functions', allUsers, currentUser)
  const likesMatches = allUsers.filter(users =>
    users.likes === currentUser.likes)
    console.log(likesMatches, 'Matches by likes')
  // const breedMatches = likesMatches.filter(users =>
  //   users.breed === users[currentUser].breed)
}
