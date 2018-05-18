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

const removeDuplicates = (arr, key) => {
    if (!(arr instanceof Array) || key && typeof key !== 'string') {
        return false;
    }

    if (key && typeof key === 'string') {
        return arr.filter((obj, index, arr) => {
            return arr.map(mapObj => mapObj[key]).indexOf(obj[key]) === index;
        });

    } else {
        return arr.filter(function(item, index, arr) {
            return arr.indexOf(item) == index;
        });
    }
}
//THIS WILL TAKE TWO LISTS OF USER LIKES AND RETURN THE COMMON ONES
const returnCommonLikes = (userLikes, myLikes) => {
    var common = []
    userLikes.forEach(like => {
        myLikes.forEach(myLike => {
            if(like.breed === myLike.breed)
            {
                common.push(like.breed)
            }
        })
    })
    return removeDuplicates(common).length
}

export const finalFilter = (arrayofobjects, likes) => {
    const commonLikes = []
    let i = 0;
    arrayofobjects.forEach(array => {
        i++
        if (array[i].id !== likes[0].id)
        {
            commonLikes.push({id: array[i].id, likes: returnCommonLikes(array,likes)})
        }
    })
    return commonLikes
}

export const likesOfUsersThatMatch = (allusers, currentUser, likes, allbreeds) => {
    let userMatches = [];
    allusers.map(user => user.likes === currentUser.likes ? userMatches.push(user) : null)
    const matchingUsers =
    userMatches.map(match => allbreeds.filter(y => y.id === match.id))
    return matchingUsers
}

//export const matchUsers = (allusers, currentUser, likes, allbreeds) => {
  //console.log(allusers, currentUser, likes, allbreeds, 'All parameters')
  
  //console.log('Users match by amount of likes', userMatches)
  
  //console.log(matchingUsers, 'This is a variable with two arrays with users that have matched in amount of likes')
  //const common = returnCommonLikes(matchingUsers[0],removeDuplicates(matchingUsers[1])) 
    
  //console.log(common, "common likes")
//}
