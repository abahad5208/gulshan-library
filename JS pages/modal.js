var modal = document.getElementById('detailsModal');
var book;
var title;
var isbn;
var author1;
var author2;
var publisher;
var genres;
var desc;
modal.addEventListener('show.bs.modal', function (event) {
    var link = event.relatedTarget;

    book = link.getAttribute('data-bs-book');
    isbn = link.getAttribute('data-bs-isbn');
    title = link.getAttribute('data-bs-title');
    author1 = link.getAttribute('data-bs-author1');
    author2 = link.getAttribute('data-bs-author2');
    publisher = link.getAttribute('data-bs-publisher');
    genres = link.getAttribute('data-bs-genre');
    desc = link.getAttribute('data-bs-desc');

    var modal_image = modal.querySelector('#bk-image');
    var modal_title = modal.querySelector('#bookDetailsModal');
    var modal_name = modal.querySelector('#bk-name');
    var modal_isbn = modal.querySelector('#bk-isbn');
    var modal_author = modal.querySelector('#bk-author');
    var modal_publisher = modal.querySelector('#bk-pub');
    var modal_genres = modal.querySelector('#bk-genre');
    var modal_desc = modal.querySelector('#bk-desc');

    modal_image.src = "Books/" +  book + ".jpg";
    modal_image.placeholder = book;
    modal_title.innerHTML = title;
    modal_name.innerHTML = title;
    modal_isbn.innerHTML = isbn;
    modal_publisher.innerHTML = publisher;
    modal_genres.innerHTML = genres;
    modal_desc.innerHTML = desc;
    if (author2 == "") {
        modal_author.innerHTML = author1;
    } else {
        modal_author.innerHTML = author1 + "<br>" + author2;
    };
});