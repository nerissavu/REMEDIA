import { getDataFromDoc } from "../utils.js";
import { getDataFromDocs } from "../utils.js";

export async function post(author, date, postTitle, image, image_name, postContent) {


    firebase.storage().ref('image_post/'+ image_name).put(image)
    firebase.storage().ref('image_post/'+ image_name).getDownloadURL().then(async(url) => {
        await firebase.firestore().collection("posts").add({
            author: author,
            date: date,
            image: url,
            postTitle: postTitle,
            postContent: postContent,
        });
    })
    alert("Posted successfully");
}

export async function readAllPosts() {
    let result = await firebase.firestore().collection('posts').get();

    for(let document of result.docs){
        console.log(document.data())
    }
}

export function listenPosts(callback) {
    firebase.firestore().collection('posts').onSnapshot(function(snapshot) {
        let data = getDataFromDocs(snapshot.docs);
        callback(data)
    })


}
