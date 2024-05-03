document.addEventListener('DOMContentLoaded', function() {
    createArticleList();
});

const articleApiUrl = 'https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/38c62965139a156d4a605be1e046ad8278235fff/articles.json';

async function createArticleList() {
    const articles = await getArticleList();
    renderArticles(articles);
}

async function getArticleList() {
    const responsePromise = await fetch(articleApiUrl);
    const response = await responsePromise.json();
    const articles = response.articles;
    return articles;
}

function createTagListHtml(tagList) {
    let tagListHtml = '<ul class="tag-list">';
    tagList.forEach(tag => {
        tagListHtml += `<li>${tag}</li>`;
    });
    tagListHtml += "</ul>";
    return tagListHtml;
}

function createArticleHtml(article) {
    const articleHtml = document.createElement("li");
    articleHtml.innerHTML = `<figure>
        <img src="./images/${article.teaserImg}" alt="${article.title}">
        <figcaption>
            <h3>${article.title}</h3>
            <address>${article.author}</address>
            ${createTagListHtml(article.tags.keywords)}
        </figcaption>
    </figure>`;
    return articleHtml;
}

function renderArticles(articles) {
    const articleListDomElement = document.querySelector('[data-js-generate-articlelist]');

    articles.forEach(article => {
        const articleHtml = createArticleHtml(article);
        articleListDomElement.appendChild(articleHtml);
    });

    return articlesHtml;
}