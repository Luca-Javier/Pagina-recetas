const d = document,
	ls = localStorage;
/**
 * Le ponemos el nombre y foto al burguer cuando el usuario está logeado, tambíen habilitamos la pagina del usuario
 *
 */
export default function checkUserLoged() {
	if (ls.getItem("id") === null || ls.getItem("name") === null || ls.getItem("img") === null)
		return null;

	let $logedBtnMobile = `<a href="../page_user/user.html" data-user-loged class="user">
          <div class='user-loged'>
            <img src="/pagina-recetas/imagenes-locales/${ls.getItem(
							"img"
						)}" alt="Foto de usuario">
            <p>${ls.getItem("name")}</p>
          </div>
        </a>`,
		$logedBtnDesktop = `<a href="../page_user/user.html" data-user-loged class="user-lg user-loged">
          <img src="/pagina-recetas/imagenes-locales/${ls.getItem(
						"img"
					)}" alt="Foto de usuario">
        </a>`;

	const $userBtnMobile = d.querySelector(".user"),
		$userBtnDesktop = d.querySelector(".user-lg");

	$userBtnMobile.insertAdjacentHTML("afterend", $logedBtnMobile);
	$userBtnDesktop.insertAdjacentHTML("afterend", $logedBtnDesktop);

	$userBtnMobile.remove();
	$userBtnDesktop.remove();
}
