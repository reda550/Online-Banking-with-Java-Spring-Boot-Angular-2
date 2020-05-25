package com.userFront.domain.security;

import com.userFront.domain.Settings.AbstractAuditableEntity;
import com.userFront.domain.User;
import lombok.*;

import javax.persistence.*;




@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="user_role")
public class UserRole extends AbstractAuditableEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long userRoleId;

    public UserRole(User user, Role role) {
        this.user = user;
        this.role = role;
    }


    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;


    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id")
    private Role role;

}
