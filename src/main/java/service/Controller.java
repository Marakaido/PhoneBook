package service;

import java.sql.Date;
import java.util.List;

import DAO.Person;
import DAO.Phone;
import DAO.repositories.PersonRepository;
import DAO.repositories.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller
{
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public String handleException(Exception e)
    {
        return e.getMessage();
    }
}