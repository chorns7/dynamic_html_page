const mainContainer = document.getElementById('container');
const reviewsContainer = document.createElement('div');
const modal = document.getElementById('modal');
reviewsContainer.appendChild(
	createReview(
		'Hello Watchkit',
		'Last mont Apple released the anticipated WatchKit Framework fro developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch Applications. In this article we are going to focus on the basic of getting started with the WatchLit frame work and developing app s for the apple watch.',
		12,
		124
	)
);
mainContainer.appendChild(createHeader());
mainContainer.appendChild(createBody());

mainContainer.appendChild(reviewsContainer);
mainContainer.appendChild(createFooter());
document.body.appendChild(CreateModal());

function createHeader() {
	const container = document.createElement('div');
	container.classList.add('row', 'align-items-center', 'mt-3');
	container.style.color = 'white';
	container.style.backgroundColor = '#52A7FA';
	container.style.minHeight = '3em';
	container.style.padding = '1em';
	//nav title
	const pageTitle = document.createElement('h1');
	pageTitle.innerText = 'HighOnCoding';
	container.appendChild(pageTitle);
	//Nav Links
	const LinksList = document.createElement('div');
	const HomeLink = document.createElement('a');
	HomeLink.innerText = 'Home';
	HomeLink.style.fontWeight = 'bold';
	HomeLink.style.margin = '2em';
	LinksList.appendChild(HomeLink);
	const CategoriesLink = document.createElement('a');
	CategoriesLink.innerText = 'Categories';
	CategoriesLink.style.margin = '1em';
	LinksList.appendChild(CategoriesLink);
	container.appendChild(LinksList);

	return container;
}

function createBody() {
	const container = document.createElement('div');
	container.classList.add('container', 'row', 'm-2', 'mt-4');
	const bodyHeaderH1 = document.createElement('h1');
	const bodyHeaderParagraph = document.createElement('p');
	bodyHeaderH1.innerText = 'Curse of the Current Reviews';
	bodyHeaderH1.style.marginBottom = '1em';
	bodyHeaderParagraph.innerText =
		'When you buy an application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews';
	container.style.backgroundColor = '#DDDEE0';
	container.style.color = '#53585E';
	container.style.padding = '1em';
	container.style.margin = '0.5em';
	container.appendChild(bodyHeaderH1);
	container.appendChild(bodyHeaderParagraph);
	return container;
}

function createReview(title, body, amountOfComments, amountOfLikes) {
	const container = document.createElement('div');
	container.classList.add('container', 'row', 'm-2');
	const reviewTitle = document.createElement('h3');
	reviewTitle.style.color = '#0465C0';
	reviewTitle.style.fontWeight = 300;
	reviewTitle.style.flexBasis = '100%';
	reviewTitle.innerText = title;
	container.appendChild(reviewTitle);
	const reviewBody = document.createElement('p');
	reviewBody.innerText = body;
	reviewBody.style.margin = 0;
	reviewBody.style.fontWeight = 300;
	container.appendChild(reviewBody);
	const commentBar = document.createElement('div');
	// commentBar.classList.add('row');
	commentBar.style.backgroundColor = '#F29017';
	commentBar.style.width = '100%';
	commentBar.style.fontWeight = 500;
	commentBar.style.padding = '0.2em';
	const comments = document.createElement('span');
	comments.style.color = 'white';
	comments.style.margin = '1em';
	comments.innerHTML = amountOfComments + ' comments';
	commentBar.appendChild(comments);
	const likes = document.createElement('span');
	likes.style.color = 'white';
	likes.innerHTML = amountOfLikes + ' likes';
	likes.style.margin = '1em';
	commentBar.appendChild(likes);
	container.appendChild(commentBar);

	return container;
}

function createFooter() {
	const container = document.createElement('div');
	container.classList.add('row', 'm-4');

	const button = document.createElement('button');
	button.classList.add(
		'col-md-2',
		'offset-md-9',
		'btn',
		'btn-primary',
		'm-auto',
		'col-4'
	);
	button.innerText = 'Add Review';
	button.addEventListener('click', function() {
		const modal = document.getElementById('modal');
		modal.style.height = '100%';
		modal.style.display = 'flex';
		modal.focus();
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
		const errorMessages = document.getElementById('errorForm') || null;
		if (errorMessages) {
			errorMessages.remove();
		}
	});
	container.appendChild(button);
	return container;
}

// Bonus lets make a modal that holds a form to add reviews.
//

function CreateModal() {
	const container = document.createElement('div');
	container.id = 'modal';
	container.classList.add('container-fluid');
	container.style.backgroundColor = 'rgba(0,0,0,0.8)';
	container.style.display = 'none';
	container.style.zIndex = 3;
	container.style.position = 'absolute';
	container.style.top = 0;
	container.style.left = 0;
	container.style.height = '100%';
	container.addEventListener('click', e => {
		const modal = document.getElementById('modal');
		const { path } = e;
		if (path[0] === modal) {
			modal.style.display = 'none';
		}
	});

	const closeButton = document.createElement('span');
	closeButton.style.fontSize = '1.5em';
	closeButton.innerText = 'X';
	closeButton.style.cursor = 'pointer';
	closeButton.style.position = 'absolute';
	closeButton.style.top = 0;
	closeButton.style.right = 0;
	closeButton.addEventListener('click', function() {
		const modal = document.getElementById('modal');
		modal.style.display = 'none';
	});
	closeButton.style.color = 'white';
	const modalForm = document.createElement('form');
	modalForm.style.backgroundColor = '#DDDEE0';
	modalForm.style.display = 'flex';
	modalForm.style.flexDirection = 'column';
	modalForm.style.alignItems = 'center';
	modalForm.style.justifyContent = 'center';
	modalForm.style.padding = '1em';
	modalForm.style.width = '50%';
	modalForm.style.height = '50%';
	modalForm.style.margin = 'auto';
	modalForm.innerHTML = '<h1>Create a new review</h1>';
	modalForm.appendChild(closeButton);
	//Title Input
	const titleInputContainer = document.createElement('div');
	titleInputContainer.style.display = 'flex';
	titleInputContainer.style.flexDirection = 'column';
	const titleInput = document.createElement('input');
	titleInput.id = 'title';
	titleInput.name = 'title';
	const titleLabel = document.createElement('label');
	titleLabel.htmlFor = 'title';
	titleLabel.innerText = 'Title';
	titleInputContainer.appendChild(titleLabel);
	titleInputContainer.appendChild(titleInput);
	modalForm.appendChild(titleInputContainer);

	//Review Body Input
	const textAreaContainer = document.createElement('div');
	textAreaContainer.style.display = 'flex';
	textAreaContainer.style.flexDirection = 'column';
	const textArea = document.createElement('textarea');
	textArea.id = 'reviewBody';
	textArea.name = 'body';
	const textAreaLabel = document.createElement('label');
	textAreaLabel.htmlFor = 'reviewBody';
	textAreaLabel.innerText = 'Message';
	textAreaContainer.appendChild(textAreaLabel);
	textAreaContainer.appendChild(textArea);
	modalForm.appendChild(textAreaContainer);

	modalForm.addEventListener('submit', e => {
		e.preventDefault();
		console.log(e);
		const { title, reviewBody } = e.target.elements;
		const randomNumberOfComments = RandomNumber(1, 350);
		const randomNumberOfLikes = RandomNumber(1, 400);
		if (title.value && reviewBody.value) {
			const newReview = createReview(
				title.value,
				reviewBody.value,
				randomNumberOfComments,
				randomNumberOfLikes
			);
			reviewsContainer.appendChild(newReview);
			document.getElementById('modal').style.display = 'none';
			e.target.reset();
		} else {
			const span = document.createElement('span');
			span.id = 'errorForm';
			span.innerText = 'Error please add a review body and title to submit.';
			span.style.color = 'red';
			modalForm.appendChild(span);
		}
	});

	const submitButton = document.createElement('button');
	submitButton.innerText = 'Submit';
	submitButton.classList.add('btn', 'btn-success');
	submitButton.type = 'submit';
	modalForm.appendChild(submitButton);
	container.appendChild(modalForm);

	return container;
}

function RandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
