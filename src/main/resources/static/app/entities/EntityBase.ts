export class EntityBase
{
    public constructor(type: string)
    {
        this.type = type;
    }

    email: string;
    creationDate: string;
    modificationDate: string;
    password: string;
    type: string;
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