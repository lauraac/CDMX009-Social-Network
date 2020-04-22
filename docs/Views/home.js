import loginFunctions from '../firebase/login.js';

export default () => {
  const homeView = document.createElement('div');
  homeView.setAttribute('class', 'Home');
  const header = document.querySelector('header');
  header.style.display = 'none';
  homeView.innerHTML = '';
  homeView.innerHTML = `
            <header>
                <div class="homeOptions">
                    <img src="images/CodeMakers.png" alt="logo" class="codeMakers">
                    <a href="#/home"><img src="images/casa.svg" alt="Home" class="btnHeader"></a>
                    <a href="#/profile"><img src="images/profile.svg" alt="Profile" class="btnHeader"></a>
                    <img src="images/cerrar-sesion.svg" alt="Cerrar Sesion" class="btnHeader" id="logOutBtn">
                </div>
            </header>
            <section class="sesionPrincipal">
                <form action="" class="newPost">
                    <textarea name="newTextPost" id="newTextPost" class="postForm" rows="3" placeholder="¿Qué estás pensando?"></textarea>
                    <button type="submit" id="submitNewPost">Compartir</button>
                </form>
            </section>
            <section class="sesionPrincipal">
                <hr>
                <div class="postContainer">
                    <div class="post">
                        <img src="images/profile.svg" alt="Profile" class="postAuthor">
                        <div class="postContent"></div><br>
                    </div>
                    <div class="postOptions">
                        <div class="likesCounter" class="likes">00</div>
                        <img src="images/corazon (1).svg" class="likes" alt="like">
                    </div>
                </div>
            </section>`;
  const logOutBtn = homeView.querySelector('#logOutBtn');
  logOutBtn.addEventListener('click', loginFunctions.sesionLogOut);
  return homeView;
};
