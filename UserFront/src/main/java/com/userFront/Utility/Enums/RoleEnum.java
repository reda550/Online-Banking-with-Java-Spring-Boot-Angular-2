package com.userFront.Utility.Enums;

import lombok.Getter;

@Getter
public enum RoleEnum {
    ADMIN("ADMIN"),
    USER("USER");
    String code ;
    RoleEnum(String code) {
        this.code = code;
    }

    public static RoleEnum findByCode(String code) {
        for (RoleEnum v : values()) {
            if (v.getCode().equals(code)) {
                return v;
            }
        }
        return null;
    }
}
