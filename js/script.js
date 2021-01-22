fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechcrunch.com%2Ffeed%2F')
.then(function (response) {
	// console.log(response);
	return response.json();
})
.then(function (data) {
	// console.log(data);
	// console.log(data.items[0].title);
	// const myData = data.items[0].title;
	// document.getElementById("myData").innerHTML = myData;

	const html = data.items.map(textData => {
		return `
		<article data-aos="fade-up">
			<div class="meta-info">
				<div class="thumb_author">
					<img src="${textData.thumbnail}" alt="author" onerror=this.src="images/avtar-image.jpg" class="img-fluid rounded-circle" />
					<small>${textData.author}</small>
				</div>
				<div class="social_share">
					<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
						<img src="images/share-icon.png" alt="share-icon" width="20" height="20" class="img-fluid" />
						<small>Share</small>
					</a>
				</div>
			</div>
			<figure>
				<img src="https://picsum.photos/400/300" alt="img" class="img-fluid" />
				<figcaption>
					<h5 class="post-title">
						<a href="${textData.link}" target="_blank">${textData.title}</a>
					</h5>
					<p><small>Published: ${textData.pubDate}</small></p>
					<p class="post-description" maxlength="50">${textData.description}</p>
				</figcaption>
			</figure>
		</article>
		`;
	}).join("");
	// console.log(html);

	document.getElementById("myData").innerHTML = html;
})
.catch(function (error) {
	console.log(error);
	console.error("Something went wrong..");
});


// left menu fixed
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
