import { Review } from './EntityBase';

export class AuthentificationInput
{
    email: string;
    password: string;
}

export class ReviewInput
{
    review: Review;
    userData: AuthentificationInput;
}