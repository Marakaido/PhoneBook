import { Review } from './EntityBase';

export class AuthentificationInput
{
    constructor(email: string, password: string)
    {
        this.email = email;
        this.password = password;
    }
    
    email: string;
    password: string;
}

export class ReviewInput
{
    constructor(review: Review, userData: AuthentificationInput)
    {
        this.review = review;
        this.userData = userData;
    }
    review: Review;
    userData: AuthentificationInput;
}