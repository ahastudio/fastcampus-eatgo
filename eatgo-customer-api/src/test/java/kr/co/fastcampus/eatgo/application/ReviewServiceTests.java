package kr.co.fastcampus.eatgo.application;

import kr.co.fastcampus.eatgo.domain.ReviewRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;

public class ReviewServiceTests {

    private ReviewService reviewService;

    @Mock
    private ReviewRepository reviewRepository;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        reviewService = new ReviewService(reviewRepository);
    }

    @Test
    public void addReview() {
        reviewService.addReview(1004L, "JOKER", 3, "Mat-it-da");

        verify(reviewRepository).save(any());
    }

}