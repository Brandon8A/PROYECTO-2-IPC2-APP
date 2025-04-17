/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.encriptacion;

import java.math.BigInteger;
import java.security.MessageDigest;

/**
 *
 * @author brandon
 */
public class EncriptarMD5 {
    public String getMD5(String contraseña) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] encryptBytes = md.digest(contraseña.getBytes());
            BigInteger numero = new BigInteger(1, encryptBytes);
            String encryptString = numero.toString(16);
            while (encryptString.length() < 32) {
                encryptString = "0" + encryptString;
            }
            return encryptString;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
