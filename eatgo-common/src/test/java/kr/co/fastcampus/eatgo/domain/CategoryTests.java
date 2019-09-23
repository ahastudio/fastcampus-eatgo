package kr.co.fastcampus.eatgo.domain;

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class CategoryTests {

    @Test
    public void creation() {
        Category category = Category.builder().name("Korean Food").build();

        assertThat(category.getName()).isEqualTo("Korean Food");
    }

}
