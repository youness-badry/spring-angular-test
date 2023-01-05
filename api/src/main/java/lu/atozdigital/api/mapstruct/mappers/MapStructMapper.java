package lu.atozdigital.api.mapstruct.mappers;

import lu.atozdigital.api.entities.Article;
import lu.atozdigital.api.entities.Order;
import lu.atozdigital.api.mapstruct.dtos.ArticleDto;
import lu.atozdigital.api.mapstruct.dtos.OrderDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(
        componentModel = "spring"
)
public interface MapStructMapper {

    ArticleDto articleToArticleDto(Article article);

    Article articleDtoToArticle(ArticleDto articleDto);

    List<ArticleDto> articlesToArticleDtos(List<Article> articles);

    OrderDto orderToOrderDto(Order order);

    Order OrderDtoToOrder(OrderDto orderDto);

    List<OrderDto> ordersToOrderDtos(List<Order> orders);
}
