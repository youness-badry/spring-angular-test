package lu.atozdigital.api.services;

import lu.atozdigital.api.entities.Order;
import lu.atozdigital.api.errors.OrderNotFoundException;

import java.util.List;

public interface OrderService {

    public List<Order> getAllOrders();
    public Order createOrder(Order order);

    public Order updateOrder(Integer orderId, Order newOrder) throws OrderNotFoundException;

    public Order updateOrderStatus(Integer orderId, Order newOrder) throws OrderNotFoundException;
}
