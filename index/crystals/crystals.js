const allCrystals = document.querySelector(".crystals");

const crystals = [
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
  {
    title: "aqua",
    desc: "awdwadwa",
    img: "test1.webp",
  },
];

for (let index = 0; index < crystals.length; index++) {
  const element = crystals[index];

  const template = `
        <div class="crystal_item">
        <div class="interact">
            <div class="crystal_img" style="background: url(../../img/crystals/img/${element.img}) center"></div>
            <div class="crystal_desc">${element.desc}</div>
        </div>
        <div class="crystal_title">${element.title}</div>
        </div>
    `;
  console.log("dsa");
  allCrystals.innerHTML += template;
}
