fortuneBank = [
"",
"",
"",
"",
"",
"",
];

function play() {
	cookie1.classList.add("cookie-hide");
	cookie2.classList.add("cookie-show");
	setTimeout(function(){
		getFortune();
	},3000);
	
}

fortuneBank = [
"แต่งตัวให้มีสีสันเพิ่มขึ้นซักหน่อย จะทำให้เกิดความสุข และความโชคดี",
"ทำงานด้วยความมั่นใจ สร้างผลงานได้ดีอย่างต่อเนื่อง",
"อย่าพึ่งยอมแพ้ ลองพยายามดูอีกซักครั้ง ความสำเส็จใกล้เข้ามาแล้วนะ",
"ลองเพิ่มไอเท็มสีเหลืองน่ารักๆให้แมทกับชุดดูสิ จะเสริมความโชคดีได้แน่ๆ",
"มันดีที่จะเป็นคนสำคัญ แต่มันจะสำคัญกว่าที่เราจะเป็นคนดี",
"อย่าพึ่งเร่งรีบจนเกินไป บางเรื่อง แค่พยายามเรื่อยๆแล้วมันจะดีขึ้นเอง"
];

function getFortune(){
	rand = Math.floor(Math.random()*fortuneBank.length);
	fortune.innerText = fortuneBank[rand];
	fortune.style.opacity = 1;
	fortune.style.top = "96px";

}