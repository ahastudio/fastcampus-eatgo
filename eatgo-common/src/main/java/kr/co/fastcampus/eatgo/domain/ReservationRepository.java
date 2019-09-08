package kr.co.fastcampus.eatgo.domain;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReservationRepository
        extends CrudRepository<Reservation, Long> {

    List<Reservation> findAllByRestaurantId(Long restaurantId);

    Reservation save(Reservation reservation);
}
