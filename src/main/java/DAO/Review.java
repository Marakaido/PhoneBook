package DAO;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonUnwrapped;

import javax.persistence.*;

@Entity(name = "reviews")

public class Review
{
    @Id
    @Column(name = "id")
    @GeneratedValue
    private long id;

    @Column(name = "message", nullable = true)
    private String message;

    @Column(name = "score", nullable = false)
    private double score;

    @ManyToOne(optional = false)
    private Person author;

    @ManyToOne(optional = false)
    @JsonProperty(value = "company")
    private Company targetCompany;

    @JsonProperty
    public String getCompanyEmail()
    {
        return targetCompany.getEmail();
    }

    @JsonProperty
    public void setCompanyEmail(String email)
    {
        if(targetCompany == null) targetCompany = new Company();
        targetCompany.setEmail(email);
    }

    public long getId()
    {
        return id;
    }

    public void setId(long id)
    {
        if(id < 0)
            throw new IllegalArgumentException("Id must be a non-negative value");

        this.id = id;
    }

    public String getMessage()
    {
        return message;
    }

    public void setMessage(String message)
    {
        this.message = message;
    }

    public double getScore()
    {
        return score;
    }

    public void setScore(double score)
    {
        this.score = score;
    }

    public Person getAuthor()
    {
        return author;
    }

    public void setAuthor(Person author)
    {
        this.author = author;
    }

    public Company getTargetCompany()
    {
        return targetCompany;
    }

    public void setTargetCompany(Company targetCompany)
    {
        this.targetCompany = targetCompany;
    }
}
