const menu = [
  {
    id: 1,
    title: "돈코츠라멘",
    category: "면류",
    price: 7500,
    img: "https://ldb-phinf.pstatic.net/20221014_62/1665708036055SUqhu_JPEG/bKL-PvLxkNiE2REsYOCN_av0tpKDKeNqHfffLe12nqw%3D.jpg",
    desc: `쫄깃한 생면과 부드러운 차슈, 반숙 계란으로 실패가 없는 메뉴입니다. `,
  },
  {
    id: 2,
    title: "매운 돈코츠라멘",
    category: "면류",
    price: 8000,
    img: "https://ldb-phinf.pstatic.net/20221014_69/1665708036157AzCVl_JPEG/SNcEYrGTl8XiEmWexipywJ15QBEy6Yy6pd8Dg_AjgZY%3D.jpg",
    desc: `돈코츠라멘의 매운버전으로 매콤한 취향이신 분들에게 강추드리는 메뉴 입니다.`,
  },
  {
    id: 3,
    title: "소유라멘",
    category: "면류",
    price: 8000,
    img: "https://ldb-phinf.pstatic.net/20221014_244/1665708036013h3jWk_JPEG/O1uOFqmfcNlsfMOFMH5jNOyD08s4fOoO334pgq30Fe0%3D.jpg",
    desc: `간장육수와 생면, 부드러운 차슈, 반숙란이 올라가는 라멘입니다.`,
  },
  {
    id: 4,
    title: "샤브쌀국수",
    category: "면류",
    price: 8000,
    img: "https://ldb-phinf.pstatic.net/20221014_78/1665708036135LAklT_JPEG/0F3h93l6RNXu-oqWRaz8CwNfRzmmJ7iwKUNuse4PW3g%3D.jpg",
    desc: `최고급면과 샤브고기, 양파, 쪽파, 홍고추가 올라가는 샤브 쌀국수 입니다.`,
  },
  {
    id: 5,
    title: "매운 샤브쌀국수",
    category: "면류",
    price: 8500,
    img: "https://ldb-phinf.pstatic.net/20221019_14/1666142390425D8x22_JPEG/wr0MyvMUa-8NuBiXHnbtM_GWSs-eFbOUz9qhK0pAuuM%3D.jpg",
    desc: `샤브쌀국수의 매운버전으로 쌀국수를 좋아하시는 분들 중 매콤한 취향이신 분들에게 강추드리는 메뉴 입니다.`,
  },
  {
    id: 6,
    title: "마제소바+밥",
    category: "면류",
    price: 8900,
    img: "https://ldb-phinf.pstatic.net/20221014_70/1665708036121826EJ_JPEG/61ykjdZYx9_Xr2J-U-61ct0wOfy8LibmDvLWc_PtTTM%3D.jpg",
    desc: `일본식 비빔소바와 미니 공기밥이 제공되는 메뉴 입니다.`,
  },
  {
    id: 7,
    title: "카제소바+밥",
    category: "면류",
    price: 9500,
    img: "https://ldb-phinf.pstatic.net/20221014_33/1665708036050x8nyY_JPEG/4ID3hoP7bdgn64CV_970Ocb54uBk-exf--yv7aWNHZA%3D.jpg",
    desc: `마제소바의 매운버전으로 알바생이 강력하게 추천드리는 메뉴 입니다.`,
  },
  {
    id: 8,
    title: "면식당 카츠",
    category: "돈카츠",
    price: 9900,
    img: "https://ldb-phinf.pstatic.net/20221014_66/1665708036019QgvUF_JPEG/Lu-dcDmU6jWwAYzEMzw4D9zAn8nuNMLkc9viMYsOpOI%3D.jpg",
    desc: `돈코츠라멘의 매운버전으로 매콤한 취향이신 분들에게 강추드리는 메뉴 입니다.`,
  },
  {
    id: 9,
    title: "매운 파 돈카츠",
    category: "돈카츠",
    price: 9500,
    img: "https://ldb-phinf.pstatic.net/20221014_253/1665708036687dPy9N_JPEG/uK3dZrUN9hNPW-Ya_jyTikxaXX39IdzUjKlZHocUmi4%3D.jpg",
    desc: `부드러운 돈카츠에 매운 트러플 카츠소스가 제공되는 돈카츠 메뉴 입니다.`,
  },
  {
    id: 10,
    title: "모짜치즈돈카츠",
    category: "돈카츠",
    price: 11500,
    img: "https://ldb-phinf.pstatic.net/20221014_30/1665708036044fxpRH_JPEG/pIaa4B-nuQSgRYO_5HJFPGyICeyxXwIN0-ZA56s3Jq8%3D.jpg",
    desc: `치즈가 듬뿍 들어간 모짜 치즈 돈카츠 메뉴입니다.`,
  },
  {
    id: 11,
    title: "샤인머스켓 에이드",
    category: "음료/주류",
    price: 5000,
    img: "https://ldb-phinf.pstatic.net/20221014_243/1665708036460x6yvc_JPEG/green_grape2_113044_870.jpg",
    desc: `달콤하고 시원한 샤인머스켓 에이드 입니다.`,
  },
  {
    id: 12,
    title: "펩시",
    category: "음료/주류",
    price: 2000,
    img: "https://ecimg.cafe24img.com/pg182b97702823022/serveonepm/web/product/big/20230106/26081_26.jpg",
    desc: `시원한 펩시콜라 입니다......................................`,
  },
  {
    id: 13,
    title: "제로콜라",
    category: "음료/주류",
    price: 2500,
    img: "https://blog.kakaocdn.net/dn/xoPWP/btq0fkdg4ym/UYPQkmiCDFM8e2xLVEtXpk/img.jpg",
    desc: `설탕을 줄인 제로콜라 입니다..................................`,
  },
  {
    id: 14,
    title: "하이볼",
    category: "음료/주류",
    price: 7000,
    img: "https://img.seoul.co.kr//img/upload/2021/08/24/SSI_20210824221902.jpg",
    desc: `시원한 하이볼 입니다........................................`,
  },
  {
    id: 14,
    title: "왕새우튀김 2pcs",
    category: "사이드",
    price: 4000,
    img: "https://ldb-phinf.pstatic.net/20221014_298/1665708036031n5S37_JPEG/m000268_a02_1280.jpg",
    desc: `왕새우튀김 2개 입니다........................................`,
  },
  {
    id: 15,
    title: "왕새우튀김 4pcs",
    category: "사이드",
    price: 7500,
    img: "https://ldb-phinf.pstatic.net/20221014_298/1665708036031n5S37_JPEG/m000268_a02_1280.jpg",
    desc: `왕새우튀김 4개 입니다.......................................`,
  },
  {
    id: 16,
    title: "짜조 2pcs",
    category: "사이드",
    price: 4000,
    img: "https://ldb-phinf.pstatic.net/20221014_176/1665708036040Ty68P_JPEG/cha_gio3_095031_870.jpgg",
    desc: `돼지고기나 새우, 게살 등을 여러 가지 채소와 섞어 라이스페이퍼에 돌돌 말아 튀긴 베트남식 만두인 짜조 2개 입니다.`,
  },
  {
    id: 17,
    title: "짜조 4pcs",
    category: "사이드",
    price: 7500,
    img: "https://ldb-phinf.pstatic.net/20221014_176/1665708036040Ty68P_JPEG/cha_gio3_095031_870.jpg",
    desc: `돼지고기나 새우, 게살 등을 여러 가지 채소와 섞어 라이스페이퍼에 돌돌 말아 튀긴 베트남식 만두인 짜조 4개 입니다.`,
  },
];

const sectionCenter = $('.section-center');
const filterBtns = $('.filter-btn');

// 메뉴 로드
$(document).ready(function() {
    displayMenuItems(menu);
});

// 종류 필터
filterBtns.each(function() {
    $(this).on('click', function(e) {
        const category = $(e.currentTarget).data('id');
        const menuCategory = menu.filter(function(menuItem) {
            // console.log(menuItem.category);
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        // console.log(menuCategory);
        if (category === "모든메뉴") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
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
    }).join("");
    sectionCenter.html(displayMenu);
}