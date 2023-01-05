package lu.atozdigital.api.servicesImpl;

import lu.atozdigital.api.entities.Order;
import lu.atozdigital.api.errors.OrderNotFoundException;
import lu.atozdigital.api.repositories.OrderRepository;
import lu.atozdigital.api.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository orderRepository;

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Integer orderId, Order newOrder) throws OrderNotFoundException {
        Optional<Order> existingOrder = orderRepository.findById(orderId);
        if (existingOrder.isPresent()) {
            existingOrder.get().setArticles(newOrder.getArticles());
            return orderRepository.save(existingOrder.get());

        } else {
            throw new OrderNotFoundException("Order not found !");
        }
    }

    @Override
    public Order updateOrderStatus(Integer orderId, Order newOrder) throws OrderNotFoundException {
        Optional<Order> existingOrder = orderRepository.findById(orderId);
        if (existingOrder.isPresent()) {
            existingOrder.get().setStatus(newOrder.getStatus());
            return orderRepository.save(existingOrder.get());

        } else {
            throw new OrderNotFoundException("Order not found !");
        }
    }
}
