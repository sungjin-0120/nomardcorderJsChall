const quos = [
  {
    quote: "포기하는 순간 경기는 끝난다",
    author: "안선생",
  },
  {
    quote: "감독님의 전성기는 언제죠? 전 지금입니다",
    author: "강백호",
  },
  {
    quote: "난 정대만 포기를 모르는 남자지 ",
    author: "정대만",
  },
  {
    quote: "포기하는 순간 경기는 끝난다",
    author: "안선생",
  },
  {
    quote: "중요한 건 꺾이지 않는 마음",
    author: "데프트",
  },
  {
    quote: "기본이 제일 중요하다",
    author: "손웅정",
  },
  {
    quote: "할 수 있다, 할 수 있다",
    author: "박상영",
  },
  {
    quote: "사랑 같은 건 없어, 그건 판타지야.",
    author: "500일의 썸머",
  },
  {
    quote: " 우리 모두 어둠을 밝히려는 길 잃은 별들이 아닐까요?",
    author: "비긴어게인",
  },
  {
    quote: "꿈은 도망가지 않아, 도망가는 것은 언제나 나 자신이야.",
    author: "신형만",
  },
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");
const aLangth = quos.length;
const i2 = quos[Math.floor(Math.random() * aLangth)];
quote.innerText = i2.quote;
author.innerText = i2.author;
