export class ContactInformation
{
    constructor(type: string)
    {
        this.type = type;
    }

    comment: string;
    entity: string;
    type: string;
}

export class Phone extends ContactInformation
{
    constructor()
    {
        super('phone');
    }

    number: string;
}

export class Email extends ContactInformation
{
    constructor()
    {
        super('email');
    }
    
    email: string;
}

export class Address extends ContactInformation
{
    constructor()
    {
        super('address');
    }
    
    address: string;
}