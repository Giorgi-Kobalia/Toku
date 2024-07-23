const allAromas = document.querySelector(".aromas");

const aromas = [
  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },

  {
    title: "AROMA",
    desc: " test ",
    img: "test2.jpg",
  },
];

for (let index = 0; index < aromas.length; index++) {
  const element = aromas[index];

  const template = `
        <div class="aroma_item">
          <div class="interact">
            <div class="aroma_img" style="background: url(../../img/aromas/${element.img}) center"></div>
            <div class="aroma_desc">${element.desc}</div>
           </div>
           <div class="aroma_title">${element.title}</div>
        </div>
    `;
    allAromas.innerHTML += template;
}
