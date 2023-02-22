const menu = [
  {
    id: 1,
    title: "돈코츠라멘",
    category: "면류",
    price: 9000,
    img: "https://ldb-phinf.pstatic.net/20221014_62/1665708036055SUqhu_JPEG/bKL-PvLxkNiE2REsYOCN_av0tpKDKeNqHfffLe12nqw%3D.jpg",
    desc: `쫄깃한 생면과 부드러운 차슈, 반숙 계란으로 실패가 없는 메뉴입니다. `,
  },
  {
    id: 2,
    title: "매운 돈코츠라멘",
    category: "면류",
    price: 9900,
    img: "https://ldb-phinf.pstatic.net/20221014_69/1665708036157AzCVl_JPEG/SNcEYrGTl8XiEmWexipywJ15QBEy6Yy6pd8Dg_AjgZY%3D.jpg",
    desc: `돈코츠라멘의 매운버전으로 매콤한 취향이신 분들에게 강추드리는 메뉴 입니다.`,
  },
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener("DOMContentLoaded", function() {
	displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function(item) {
		// console.log(item);
		
		return `<article class="menu-item">
				<img src=${item.img} class="photo" alt=${item.title}/>
				<div class="item-info">
					<header>
						<h4>
							${item.title}
						</h4>
						<h4 class="price">
							₩${item.price}
						</h4>
					</header>
					<p class="item-text">
						${item.desc}
					</p>
				</div>
			</article>`;
    });
	displayMenu = displayMenu.join("");
	sectionCenter.innerHTML = displayMenu;
}