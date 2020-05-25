package com.userFront.Utility.Forms;

import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Data
@NoArgsConstructor
public class UserForm implements Serializable {
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;

    public UserForm(String username, String password, String firstName, String lastName, String email, String phone) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
    }
}
