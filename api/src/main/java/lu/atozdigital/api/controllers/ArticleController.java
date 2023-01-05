package lu.atozdigital.api.controllers;

import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.errors.ArticleNotFoundException;
import lu.atozdigital.api.mapstruct.dtos.ArticleDto;
import lu.atozdigital.api.mapstruct.mappers.MapStructMapper;
import lu.atozdigital.api.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ArticleController {

    @Autowired
    ArticleService articleService;
    @Autowired
    MapStructMapper mapStructMapper;

    @PostMapping("/articles")
    public Article createArticle(@Valid @RequestBody Article article) {
        return articleService.createArticle(article);
    }

    @GetMapping("/articles/{id}")
    public ArticleDto getArticleById(@PathVariable("id") Integer articleId) throws ArticleNotFoundException {
        return mapStructMapper.articleToArticleDto(articleService.getArticleById(articleId));
    }

    @GetMapping("/articles")
    public List<ArticleDto> getAllArticles() {
        return mapStructMapper.articlesToArticleDtos(articleService.getAllArticles());
    }

}
