package com.userFront.resource;

import java.awt.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



import com.userFront.Repository.RoleDao;
import com.userFront.Utility.Enums.RoleEnum;
import com.userFront.Utility.Forms.UserForm;
import com.userFront.domain.security.UserRole;
import org.apache.http.protocol.HTTP;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.userFront.domain.PrimaryTransaction;
import com.userFront.domain.SavingsTransaction;
import com.userFront.domain.User;
import com.userFront.service.TransactionService;
import com.userFront.service.UserService;

@RestController
@RequestMapping("/api")
//@PreAuthorize("hasRole('ADMIN')")
public class UserResource {

    @Autowired
    private UserService userService;

    @Autowired
    private TransactionService transactionService;

    @Autowired
    RoleDao roleDao;

    @RequestMapping(value = "/user/addadmin", method = RequestMethod.POST , produces = MediaType.APPLICATION_JSON_VALUE)
    public User addadmin(@RequestBody UserForm user) {
        User admin = new User();
        admin.setFirstName(user.getFirstName());
        admin.setLastName(user.getLastName());
        admin.setUsername(user.getUsername());
        admin.setPassword(user.getPassword());
        admin.setPhone(user.getPhone());
        admin.setEmail(user.getEmail());
        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(new UserRole(admin, roleDao.findByName(RoleEnum.ADMIN)));
        //userService.createUser(admin,userRoles);
        if(userService.createUser(admin,userRoles) != null)
        return admin;
        else return null;
    }

    @RequestMapping(value = "/user/all", method = RequestMethod.GET , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<User>> userList() {
        List<User> users = userService.findUserList();
        return new ResponseEntity<List<User>> (users,HttpStatus.OK) ;
    }
    @RequestMapping(value = "/user/admins", method = RequestMethod.GET , produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<User>> userAdmins() {
        List<User> Admins = userService.findAdminList();
        return new ResponseEntity<List<User>> (Admins,HttpStatus.OK) ;
    }

    @RequestMapping(value = "/user/primary/transaction", method = RequestMethod.GET)
    public List<PrimaryTransaction> getPrimaryTransactionList(@RequestParam("username") String username) {
        return transactionService.findPrimaryTransactionList(username);
    }

    @RequestMapping(value = "/user/savings/transaction", method = RequestMethod.GET)
    public List<SavingsTransaction> getSavingsTransactionList(@RequestParam("username") String username) {
        return transactionService.findSavingsTransactionList(username);
    }

    @RequestMapping("/user/{username}/enable")
    public void enableUser(@PathVariable("username") String username) {
        userService.enableUser(username);
    }

    @RequestMapping("/user/{username}/disable")
    public void diableUser(@PathVariable("username") String username) {
        userService.disableUser(username);
    }
}
