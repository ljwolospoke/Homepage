var fortunes = [
        "conquer your fears or they will conquer you.",
        "River need springs.",
        "Do not fear what you don't know.",
        "you will have a pleasant suprise.",
        "whenever possible, keep it simple.",
];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
};
