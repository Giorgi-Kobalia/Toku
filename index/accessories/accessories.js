const allAccessories = document.querySelector(".accessories");

const accessories = [
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
  {
    title: "BRACELET",
    desc: " test ",
    img: "test3.webp",
  },
];

for (let index = 0; index < accessories.length; index++) {
  const element = accessories[index];

  const template = `
        <div class="accessorie_item">
        <div class="interact">
            <div class="accessorie_img" style="background: url(../../img/accessories/${element.img}) center"></div>
            <div class="accessorie_desc">${element.desc}</div>
        </div>
        <div class="accessorie_title">${element.title}</div>
        </div>
    `;
  allAccessories.innerHTML += template;
}
