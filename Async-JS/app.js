console.log(`Start`);

function getVideos(user) {
    console.log(`Getting videos for ${user.userEmail}`);
    console.log(['video1', 'video2', 'video3', 'video4']);
}

function onSuccess(user, getVideos) {
    console.log(user);
    getVideos(user);
}

function loginUser(email, password, onSuccess) {
    setTimeout(() => {
        onSuccess({ userEmail: email, userPass: password }, getVideos);
        return;
    }, 1000);
}

loginUser('Vinay@goomal.com', '23454321', onSuccess);

console.log(`Finish`);