package service.controllers.data_wrappers.input;

import DAO.Review;
import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

/**
 * @author marakaido
 * @since 29.11.16
 */
@JsonAutoDetect
public class ReviewInput
{
    private Review review;
    private AuthentificationInput userData;

    public Review getReview()
    {
        return review;
    }

    public void setReview(Review review)
    {
        this.review = review;
    }

    public AuthentificationInput getUserData()
    {
        return userData;
    }

    public void setUserData(AuthentificationInput userData)
    {
        this.userData = userData;
    }
}
