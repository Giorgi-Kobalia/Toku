const allCrystals = document.querySelector(".crystals");
const test = document.querySelector(".test");
const desc_desc = document.querySelector(".desc_desc");

const crystals = [
  {
    title: "aventurine",
    img: "aventurine.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "aquamarine",
    img: "aquamarine.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "amazonite",
    img: "amazonite.jpg",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "amethyst",
    img: "amethyst.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "apatite",
    img: "apatite.jpg",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "rose quartz",
    img: "rose_quartz.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "aventurine",
    img: "aventurine.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "aquamarine",
    img: "aquamarine.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "amazonite",
    img: "amazonite.jpg",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "amethyst",
    img: "amethyst.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "apatite",
    img: "apatite.jpg",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },
    ],
  },

  {
    title: "rose quartz",
    img: "rose_quartz.webp",
    desc: [
      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },




      {
        satauri: ` აღწერა `,
        aghwera: ` ავენტურინი არის კვარცის ფორმა, რომელიც ხასიათდება მისი მწვანედან მოლურჯო-მომწვანო შეფერილობით და პაწაწინა მეტალის ჩანართების არსებობით, რომლებიც ქმნიან ცქრიალა ან მოციმციმე ეფექტს, რომელიც ცნობილია როგორც . ეს არის პოპულარული და მრავალმხრივი ძვირფასი ქვა, რომელიც გამოიყენება სხვადასხვა სახის სამკაულებსა და ჩუქურთმებში. `,
      },
      {
        satauri: ` ჩაკრა `,
        aghwera: ` ავენტურინი პირველ რიგში ასოცირდება გულის ჩაკრასთან (ანაჰატა). გულის ჩაკრა დაკავშირებულია სიყვარულთან, თანაგრძნობასთან და ემოციურ კეთილდღეობასთან. `,
      },
      {
        satauri: ` მაგიური შესაძლებლობები  `,
        aghwera: ` ავენტურინი გამოიყენება სხვადასხვა მაგიური და მეტაფიზიკური მიზნებისთვის, მათ შორის: `,
      },
      {
        satauri: ` განკურნება და კომფორტი `,
        aghwera: ` ითვლება, რომ ის ხელს უწყობს განკურნებას, კომფორტს და ემოციურ წონასწორობას. `,
      },
      {
        satauri: ` კეთილდღეობა `,
        aghwera: ` ავენტურინი ხშირად ასოცირდება სიუხვისა და კეთილდღეობის მოზიდვასთან. `,
      },
      {
        satauri: ` ენერგიის ჰარმონიზაცია `,
        aghwera: ` მას შეუძლია ენერგიის ჰარმონიზაცია და დაბალანსება.`,
      },
      {
        satauri: ` კრეატიულობა `,
        aghwera: `  ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` დაცვა `,
        aghwera: `  ზოგი იყენებს მას უარყოფითი ენერგიებისგან დასაცავად. `,
      },
      {
        satauri: ` ჯანმრთელობის გამოყენება `,
        aghwera: ` ავენტურინი ასტიმულირებს შემოქმედებითობას და მხატვრულ გამოხატვას. `,
      },
      {
        satauri: ` ემოციური კეთილდღეობა  `,
        aghwera: ` ეს ხელს უწყობს ემოციურ წონასწორობას, სტაბილურობას და კომფორტს. `,
      },

    ],
  },
];

for (let index = 0; index < crystals.length; index++) {
  const element = crystals[index];

  const template = `
        <div class="crystal_item">
        <div class="interact">
            <div class="crystal_img" style="background: url(../../img/crystals/${element.img}) center"></div>
            <div class="more"> ვრცლად </div>
        </div>
        <div class="crystal_title">${element.title}</div>
        </div>
    `;
  allCrystals.innerHTML += template;
}

const more = document.querySelectorAll(".more");
more.forEach((more, index) => {
  more.addEventListener("click", () => {
    let html = "";
    crystals[index].desc.forEach((item) => {
      html += `<div> <span style="font-weight: 600; font-size: 22px;"> ${item.satauri} </span>: ${item.aghwera}</div><br>`;
    });

    test.innerHTML = html;
    desc_desc.style.display = "flex";
    allCrystals.style.opacity = '0'

    document.body.style.overflow = "hidden";
    document.body.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
  });
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  test.innerHTML = "";
  desc_desc.style.display = "none";
  allCrystals.style.opacity = '100'

  document.body.style.overflow = "";
  document.body.removeEventListener("touchmove", preventDefault);
});

function preventDefault(e) {
  e.preventDefault();
}
