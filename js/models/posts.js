export async function post(name, date, postTitle, image, postContent) {
    await firebase.firestore().collection("posts").add({
        name: name,
        date: date,
        postTitle: postTitle,
        image: image,
        postContent: postContent,
    });
    alert("Posted successfully");
}