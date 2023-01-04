package lu.atozdigital.api.services;

import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.errors.ArticleNotFoundException;

public interface ArticleService {

    public Article createArticle(Article article);
    public Article getArticleById(Integer articleId) throws ArticleNotFoundException;
}
