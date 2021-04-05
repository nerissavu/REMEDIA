export async function post(name, date, postTitle, image, postContent) {
    await firebase.firestore().collection("posts").add({
        name: name,
        dob: dob,
        gender: gender,
        email: email,
        phone: phone,
        scheduledDate: scheduledDate,
        scheduledTime: scheduledTime,
        description: description,
        prioritizedExperts: [first, second, third],
    });
    alert("Register successfully");
}