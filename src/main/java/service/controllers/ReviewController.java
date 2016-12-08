package service.controllers;

import DAO.Company;
import DAO.EntityBase;
import DAO.Phone;
import DAO.Review;
import DAO.repositories.CompanyRepository;
import DAO.repositories.ReviewRepository;
import DAO.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.controllers.data_wrappers.input.ReviewInput;

import java.util.List;

/**
 * @author marakaido
 * @since 29.11.16
 */
@RestController
public class ReviewController
{
    @Autowired
    private UserController userController;

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CompanyRepository companyRepository;

    @RequestMapping(path = "service/review",
                    method = RequestMethod.POST,
                    consumes="application/json")
    public String add(@RequestBody Review review)
    {
        if (reviewRepository.saveAndFlush(review) != null)
        {
            return "Review successfully added";
        }
        else throw new IllegalArgumentException("Failed to add review");
    }


    @RequestMapping(path = "service/review",
                    method = RequestMethod.DELETE,
                    consumes="application/json")
    public String remove(ReviewInput reviewInput)
    {
        Review review = reviewRepository.findOne(reviewInput.getReview().getId());
        if(review != null)
        {
            reviewRepository.delete(reviewInput.getReview());
            return "Review deleted successfully";
        }
        else throw new IllegalArgumentException("Review does not exist");
    }

    @RequestMapping(path = "service/review/{email}",
                    method = RequestMethod.GET)
    public List<Review> get(@PathVariable String email)
    {
        Company company = companyRepository.findOne(email);
        if(company != null) return reviewRepository.getByTargetCompany(company);
        else throw new IllegalArgumentException("Company with this email is not registered");
    }
}
