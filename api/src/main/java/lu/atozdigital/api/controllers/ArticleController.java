package lu.atozdigital.api.controllers;

import lu.atozdigital.api.dtos.ArticleDto;
import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.errors.ArticleNotFoundException;
import lu.atozdigital.api.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class ArticleController {

    @Autowired
    ArticleService articleService;
    @PostMapping("/articles")
    public Article createArticle(@Valid @RequestBody Article article) {
        return articleService.createArticle(article);
    }

    @GetMapping("article/{id}")
    public Article getArticleById(@PathVariable("id") Integer articleId) throws ArticleNotFoundException {
        return articleService.getArticleById(articleId);
    }

}
