import {getDataFromDoc, md5} from '../utils.js'

export async function signup(name, email, password) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('email','==', email)
        .get();

    console.log(response);

    if(response.empty) {
        await firebase.firestore().collection('users').add({
            name: name,
            email: email,
            password: md5(password),
        });
    
        console.log('Register Successfully')
    }else {
        alert('This email has been used')
    }
}

export async function signin(email, password) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('email','==', email)
        .where("password", "==", md5(password))
        .get();

    if(response.empty) {
        alert('Your email or your password is incorrect')
    }else{
        let userId = response.docs[0].id;
        let token = generateToken(userId);

        localStorage.setItem("token", token);
        await updateUser(userId, { token: token });

        router.navigate('/homepage');
    }


}

export async function updateUser(id, data) {
    await firebase.firestore().collection('users').doc(id).update(data);
}

export async function getUserByToken(token) {
    let response = await firebase
        .firestore()
        .collection('users')
        .where('token', '==', token)
        .get();

    if (response.empty) {
        throw new Error("User's not exist");
    }

    return getDataFromDoc(response.docs[0]);
}

export function generateToken(id) {
    return md5(Date.now() + id);
}

export async function getCurrentUser() {
    let token = localStorage.getItem('token');
    let currentUser = await getUserByToken(token);
    return currentUser;
}

export async function listenCurrentUser(callback) {
    let currentUser = await getCurrentUser();
    firebase.firestore().collection('users').doc(currentUser.id).onSnapshot(function (snapshot) {
        let user = getDataFromDoc(snapshot);
        callback(user);
    });
}