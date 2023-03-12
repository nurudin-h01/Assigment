let comment = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];
let com = {
  commentId: 1,
  commentContent: "Hai",
  replies: [
    {
      commentId: 11,
      commentContent: "Hai juga",
      replies: [
        {
          commentId: 111,
          commentContent: "Haai juga hai jugaa",
        },
        {
          commentId: 112,
          commentContent: "Haai juga hai jugaa",
        },
      ],
    },
    {
      commentId: 12,
      commentContent: "Hai juga",
      replies: [
        {
          commentId: 121,
          commentContent: "Haai juga hai jugaa",
        },
      ],
    },
  ],
}
// soal 1
let count = 0
function count_comment(arr, counting){
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    for (const key in element) {
      if(key === 'commentId'){
        counting = counting + 1
      }
      if(key === 'replies'){
        counting = count_comment(element[key], counting)
      }
    }
  }
  return counting
}

console.log(count_comment(comment, count))
