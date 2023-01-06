package lu.atozdigital.api.controllers;

import lu.atozdigital.api.entities.Order;
import lu.atozdigital.api.errors.OrderNotFoundException;
import lu.atozdigital.api.mapstruct.dtos.OrderDto;
import lu.atozdigital.api.mapstruct.mappers.MapStructMapper;
import lu.atozdigital.api.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin
@RestController
public class OrderController {

    @Autowired
    OrderService orderService;
    @Autowired
    MapStructMapper mapStructMapper;

    @GetMapping("/orders")
    public List<OrderDto> getAllOrders() {
        return mapStructMapper.ordersToOrderDtos(orderService.getAllOrders());
    }
    @PostMapping("/orders")
    public Order createOrder(@Valid @RequestBody Order order) {
        return orderService.createOrder(order);
    }

    @PutMapping("/orders/{id}")
    public Order updateOrder(@PathVariable("id") Integer orderId, @RequestBody Order newOrder) throws OrderNotFoundException {
        return orderService.updateOrder(orderId, newOrder);
    }

    @PutMapping("/orders/{id}/status")
    public Order updateOrderStatus(@PathVariable("id") Integer orderId, @RequestBody Order newOrder) throws OrderNotFoundException {
        return orderService.updateOrderStatus(orderId, newOrder);
    }


}
