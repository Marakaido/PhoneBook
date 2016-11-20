export class ContactInformation
{
    comment: string;
    entity: string;
}

export class Phone extends ContactInformation
{
    number: string;
}

export class Email extends ContactInformation
{
    email: string;
}

export class Address extends ContactInformation
{
    address: string;
}