package service.controllers.data_wrappers.input;

/**
 * @author marakaido
 * @since 29.11.16
 */
public class AuthentificationInput
{
    private String email;
    private String password;

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }
}
