package kr.co.fastcampus.eatgo.utils;

import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class JwtUtilTests {

    private static final String SECRET = "12345678901234567890123456789012";

    private JwtUtil jwtUtil;

    @BeforeEach
    public void setUp() {
        jwtUtil = new JwtUtil(SECRET);
    }

    @Test
    public void createToken() {
        String token = jwtUtil.createToken(1004L, "John", null);

        assertThat(token).contains(".");
    }

    @Test
    public void getCalims() {
        String token = "eyJhbGciOiJIUzI1NiJ9." +
                "eyJ1c2VySWQiOjEwMDQsIm5hbWUiOiJKb2huIn0." +
                "8hm6ZOJykSINHxL-rf0yV882fApL3hyQ9-WGlJUyo2A";

        Claims claims = jwtUtil.getClaims(token);

        assertThat(claims.get("userId", Long.class)).isEqualTo(1004L);
        assertThat(claims.get("name")).isEqualTo("John");
    }
}
