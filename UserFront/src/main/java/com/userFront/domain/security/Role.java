package com.userFront.domain.security;

import com.userFront.Utility.Enums.RoleEnum;
import com.userFront.domain.Settings.AbstractAuditableEntity;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Role extends AbstractAuditableEntity {
    @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
    private int roleId;

    @Enumerated(EnumType.STRING)
    @Column(name = "Role_name")
    private RoleEnum name;

    public Role(RoleEnum name) {
        this.name = name;
    }

    @OneToMany(mappedBy = "role", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<UserRole> userRoles = new HashSet<>();

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }
    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }


}
