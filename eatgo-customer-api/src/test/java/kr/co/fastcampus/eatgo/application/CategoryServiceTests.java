package kr.co.fastcampus.eatgo.application;

import kr.co.fastcampus.eatgo.domain.Category;
import kr.co.fastcampus.eatgo.domain.CategoryRepository;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

public class CategoryServiceTests {

    private CategoryService categoryService;

    @Mock
    private CategoryRepository categoryRepository;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        categoryService = new CategoryService(categoryRepository);
    }

    @Test
    public void getRegions() {
        List<Category> mockCategory = new ArrayList<>();
        mockCategory.add(Category.builder().name("Korean Food").build());

        given(categoryRepository.findAll()).willReturn(mockCategory);

        List<Category> categories = categoryService.getCategories();

        Category category = categories.get(0);
        assertThat(category.getName()).isEqualTo("Korean Food");
    }

}