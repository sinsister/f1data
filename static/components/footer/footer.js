const template = document.createElement("template");
template.innerHTML = `
<link rel="stylesheet" href="/assets/tailwind/style.css">
<link rel="stylesheet" href="/assets/fonts/fontAwa.css">
<link rel="stylesheet" href="/assets/font/font.css">
<link rel="stylesheet" href="/assets/footerApp.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<section class="contact rtl">
		<div class="container cntFr">
			<div class="contactForm rtl rounded-md">
				<ul class="sidePages flex-col items-center flex gap-2 justify-between">
					<img src='/assets/img/icons/Logo.png' class="imgFoot h-full w-40" />
					<h3 class="textTtr text-md text-bold">جامعه ای نوین برای طرفداران و علاقه مندان</h3>
					<ul class="sci">
					<li><a href="#"><ion-icon name="logo-discord"></ion-icon></a></li>
					<li><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
					<li><a href="https://t.me/F1DataOfficial"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
				</ul>
				</ul>
			</div>
		</div>
	</section>
	<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
	<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
`;
class footerHtml extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
export { footerHtml };
