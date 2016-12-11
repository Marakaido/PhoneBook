export class EntityBase
{
    public constructor(type: string)
    {
        this.type = type;
    }

    email: string;
    type: string;

    public isPerson(): boolean
    {
        return this.type === "person";
    }

    public isCompany(): boolean
    {
        return this.type === "company";
    }
}

export class Person extends EntityBase
{
    public constructor()
    {
        super("person");
    }
    
    name: string;
    surname: string;
}

export class Company extends EntityBase
{
    public constructor()
    {
        super("company");
    }

    name: string;
    description: string;
    rating: number;
}

export class Review
{
    id: number;
    message: string;
    score: number;
    author: Person;
    company: Company;
}