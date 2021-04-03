export async function register(name, dob, gender, email, phone, scheduledDate, scheduledTime, description, first, second, third) {
    let response = await firebase
        .firestore()
        .collection("appointments")
        .where("email", "==", email)
        .get();

    console.log(response);

    if (response.empty) {
        await firebase.firestore().collection("appointments").add({
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
}