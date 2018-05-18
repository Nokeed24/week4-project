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

// const allLikes = [
//   { id: 1, name: 'no' },
//   { id: 1, name: 'lab' },
//   { id: 2, name: 'doggo3' },
//   { id: 2, name: 'labrador' },
//   { id: 3, name: 'doggo3' },
//   { id: 4, name: 'doggo3' },
//   { id: 5, name: 'labrador' },
//   { id: 6, name: 'doggo3' }
// ]
//
// const allUsers = [
//   { id: 1, likes: 40 },
//   { id: 2, likes: 40 },
//   { id: 3, likes: 56 },
//   { id: 4, likes: 11 },
//   { id: 5, likes: 40 },
//   { id: 6, likes: 40 },
// ]
//
// const currentUser = { id: 1, likes: 40, dog: 'labrador' };


export const matchUsers = (allusers, currentUser, likes, allbreeds) => {
  console.log(allusers, currentUser, likes, allbreeds, 'All parameters')
  let userMatches = [];
  allusers.map(user => user.likes === currentUser.likes ? userMatches.push(user) : null)
  console.log('Users match by amount of likes', userMatches.map(x => x.id))
  let random = []
  allbreeds.map(x => random.push(x.breed))
  // console.log(likes.map(x => random.filter(y => y === x.breed)))
  // let random3 = random.map(x => x.include(random2[x.indexOf()]))
  // console.log(random3, 'MATCHESFFFSS   SJNFLKSN')
  const matchingUsers =
    userMatches.map(match => allbreeds.filter(y => y.id === match.id))
  console.log(matchingUsers, 'This is a variable with two arrays with users that have matched in amount of likes')
  
  // matchingUsers.map((x, i) => x[i].concat(x[i+1]))
  console.log('breedsofmatch', matchingUsers.map((x, i) => x[i].concat(x[i+1])))
}
