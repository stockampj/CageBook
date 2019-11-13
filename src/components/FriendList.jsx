import React from 'react';
import Friend from './Friend';

var masterFriendList = [
  {
    name: 'Chris',
    bio: 'Im a dangerous biker man!!!',
    imgURL: 'https://img.maximummedia.ie/joe_co_uk/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lY291ay5tYXhpbXVtbWVkaWEuaWUuczMuYW1hem9uYXdzLmNvbVxcXC93cC1jb250ZW50XFxcL3VwbG9hZHNcXFwvMjAxN1xcXC8wN1xcXC8xMjA5MjY1NlxcXC9uaWMtY2FnZS0xMDI0eDUzOC5qcGdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmNvLnVrXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lY291a1xcXC9uby1pbWFnZS5wbmc_aWQ9MGE4OTc2MWQwYTNjNmY1MWY3ZDZcIixcIm9wdGlvbnNcIjpbXX0iLCJoYXNoIjoiOTIzNTY1Nzc5Y2Y4NGNjODEyOTFhNDU5Y2Y0ODNhYzFkYjViYmJjZiJ9/nic-cage-1024x538.jpg'
  },
  {
    name: 'Sofia',
    bio: 'I will cut you.',
    imgURL: 'https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=700&quality=85&auto=format&fit=max&s=c906598d7b435814a7e49a5ee4779c2f',
  },
  {
    name: 'Devin',
    bio: 'Im a cool web dev guy.',
    imgURL: 'https://pbs.twimg.com/profile_images/535525465176276992/cXZZdSMP_400x400.png',
  }
]

function FriendList(){
  return(
    <div>
      {masterFriendList.map((friend, index)=>
        <Friend
          name={friend.name}
          bio={friend.bio}
          imgURL={friend.imgURL}
          key={index}
        />
      )}
    </div>
  )
}

export default FriendList;