/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.models;

/**
 *
 * @author brandon
 */
public class ClienteModel {
    private String email;
    private String password;
    private boolean listaNegra;
    private String userDpi;
    private String userPhoneNumber;
    private String userAddress;
    private String pathFoto;
    private String hobbies;
    private String descripcion;
    private String gustos;

    public ClienteModel(String correo, String contraseña, String userDpi, String userPhoneNumber, String userAddress) {
        this.email = correo;
        this.password = contraseña;
        this.userDpi = userDpi;
        this.userPhoneNumber = userPhoneNumber;
        this.userAddress = userAddress;
    }

    public ClienteModel(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public ClienteModel(String email) {
        this.email = email;
    }
    
    public ClienteModel() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String passwotd) {
        this.password = passwotd;
    }

    public boolean isListaNegra() {
        return listaNegra;
    }

    public void setListaNegra(boolean listaNegra) {
        this.listaNegra = listaNegra;
    }

    public String getUserDpi() {
        return userDpi;
    }

    public void setUserDpi(String userDpi) {
        this.userDpi = userDpi;
    }

    public String getUserPhoneNumber() {
        return userPhoneNumber;
    }

    public void setUserPhoneNumber(String userPhoneNumber) {
        this.userPhoneNumber = userPhoneNumber;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddres(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getPathFoto() {
        return pathFoto;
    }

    public void setPathFoto(String pathFoto) {
        this.pathFoto = pathFoto;
    }

    public String getHobbies() {
        return hobbies;
    }

    public void setHobbies(String hobbies) {
        this.hobbies = hobbies;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getGustos() {
        return gustos;
    }

    public void setGustos(String gustos) {
        this.gustos = gustos;
    }
    
    @Override
    public String toString(){
        return "Cliente { Correo = " + this.email + ", password = " + this.password + "}"; 
    }
    
}
