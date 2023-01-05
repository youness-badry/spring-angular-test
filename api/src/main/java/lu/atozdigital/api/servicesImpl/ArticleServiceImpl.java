package lu.atozdigital.api.servicesImpl;

import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.errors.ArticleNotFoundException;
import lu.atozdigital.api.mapstruct.dtos.ArticleDto;
import lu.atozdigital.api.repositories.ArticleRepository;
import lu.atozdigital.api.services.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    ArticleRepository articleRepository;
    @Override
    public Article createArticle(Article article) {
            return articleRepository.save(article);

    }

    @Override
    public Article getArticleById(Integer articleId) throws ArticleNotFoundException {

        Optional<Article> article = articleRepository.findById(articleId);

        if (!article.isPresent()) {
            throw new ArticleNotFoundException("Article Not Found !");
        }
        return article.get();
    }

    @Override
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }
}
