const allTarots = document.querySelector(".tarots");

const tarots = [
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
  {
    title: "TAROT",
    desc: " TAROS SHESAXEB RAME TEQSTI ROMELIC AXSNIS RAS WARMOADGENS TARO",
    img: "tarot.jpg",
    pdf: "test.pdf",
  },
];

for (let index = 0; index < tarots.length; index++) {
  const element = tarots[index];

  const template = `
        <div class="tarot_item">
        <div class="interact">
            <div class="tarot_img" style="background: url(../../img/tarots/${element.img}) center"></div>
            <div class="tarot_desc">${element.desc}</div>
            <div class="tarot_title">${element.title}</div>
        </div>
        <a href='../../pdf/${element.pdf}' download=""  class="tarot_pdf"></a>

        </div>
    `;
  console.log("dsa");
  allTarots.innerHTML += template;
}
