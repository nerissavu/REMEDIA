export function md5(value) {
    return CryptoJS.MD5(value).toString();
}


// chuyển đổi dữ liệu của document (dạng cloud firestore) => dữ liệu có thể thấy được
export function getDataFromDoc(doc) {
    return {
        id: doc.id,
        ...doc.data()
    };
}

export function getDataFromDocs(docs) {
    return docs.map((doc) => {
        return getDataFromDoc(doc);
    });
}