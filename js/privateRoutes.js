const user = JSON.parse(localStorage.getItem('user'))
if (!user) {
    location.href='../index.html';
}