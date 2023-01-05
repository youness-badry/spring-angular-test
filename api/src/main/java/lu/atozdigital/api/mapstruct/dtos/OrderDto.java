package lu.atozdigital.api.mapstruct.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import lu.atozdigital.api.entities.Article;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

public class OrderDto {
    @JsonProperty
    private Integer id;
    @JsonProperty
    private String reference;
    @JsonProperty
    private String status;
    @JsonProperty
    private Date orderDate;
    @JsonProperty
    private List<Article> articles;

    public OrderDto() {
    }

    public OrderDto(Integer id, String reference, String status, Date orderDate, List<Article> articles) {
        this.id = id;
        this.reference = reference;
        this.status = status;
        this.orderDate = orderDate;
        this.articles = articles;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public List<Article> getArticles() {
        return articles;
    }

    public void setArticles(List<Article> articles) {
        this.articles = articles;
    }
}
