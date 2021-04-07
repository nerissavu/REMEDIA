export async function post(name, date, postTitle, image, image_name, postContent) {
    await firebase.firestore().collection("posts").add({
        name: name,
        date: date,
        postTitle: postTitle,
        postContent: postContent,
    });

    firebase.storage().ref('image_post/'+ image_name).put(image)
    alert("Posted successfully");
}