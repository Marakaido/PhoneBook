package service.controllers.data_wrappers.input;

import DAO.Review;

/**
 * @author marakaido
 * @since 29.11.16
 */
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
