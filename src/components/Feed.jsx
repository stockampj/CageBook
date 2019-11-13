import React from 'react';
import Post from './Post'

var masterFeedList = [
  {
    name:'Kira',
    tweet: 'Hello World!',
    imgURL: 'https://media.gq.com/photos/5582f8c409f0bee56440b484/master/pass/entertainment-2011-05-cage-match-nic-cage_300x430.jpg'
  },
  {
    name: 'Andrew',
    tweet: 'Did you catch last nights survivor episode?',
    imgURL: 'https://www.indiewire.com/wp-content/uploads/2018/01/nicolas-cage-sundance-studio-mandy.png?:w=780'
  },
  {
    name: 'Lauren',
    tweet: 'Oakland!',
    imgURL: 'https://miro.medium.com/max/419/1*q_VyVPU3LmjmkorvqhxQvg.jpeg'
  },
  {
    name: 'Anita',
    tweet: 'Regex is awesome!',
    imgURL: 'http://cdn3.whatculture.com/images/2018/04/e7118d55274dee17-600x338.jpg'
  },
]

function Feed(){
  return (
    <div>
      <hr/>
      {masterFeedList.map((post, index) =>
        <Post
          name = {post.name}
          tweet = {post.tweet}
          imgURL = {post.imgURL}
        />
        )}
    </div>
  );
}

export default Feed;