const DeleteSesion = document.getElementById("DeleteSesion");

const logOut = () => {
    const userIndividual = JSON.parse(localStorage.getItem('individualUser')) || {};
    const user = JSON.parse(localStorage.getItem('user')) || [];

    const userIndividualPosition = user.findIndex((Ls) =>Ls.correo === userIndividual.correo);

    if (userIndividualPosition !== -1) {
        user[userIndividualPosition].login = false;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.removeItem('individualUser'); 
        setTimeout(() => {
            location.href = "../index.html";
        }, 1000);
    }
}

DeleteSesion.addEventListener('click', logOut);
