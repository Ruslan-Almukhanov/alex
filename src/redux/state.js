const dataTasks = 
    [
        {id: 1 , post:'Hello, world!' },
        {id: 2 , post:'How are you?' },
        {id: 3 , post:'Hey , baby!'},
        {id: 4 , post:'Where my react?'},
    ]

    export let newPosts = (newPosting) =>{
        let newPost = {
             id:5,
             post: newPosting,
         };
         dataTasks.push(newPost);
     }

export default dataTasks;