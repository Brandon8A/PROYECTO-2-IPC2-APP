/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.models;

/**
 *
 * @author brandon
 */
public class EmpleadoModel {
    
    private String email;
    private String password;
    private String pathFoto;
    private String descripcionProfesional;

    public EmpleadoModel(String email, String password, String pathFoto, String descripcionProfesional) {
        this.email = email;
        this.password = password;
        this.pathFoto = pathFoto;
        this.descripcionProfesional = descripcionProfesional;
    }

    public EmpleadoModel(String email, String password) {
        this.email = email;
        this.password = password;
    }

    
    
    public EmpleadoModel() {
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

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPathFoto() {
        return pathFoto;
    }

    public void setPathFoto(String pathFoto) {
        this.pathFoto = pathFoto;
    }

    public String getDescripcionProfesional() {
        return descripcionProfesional;
    }

    public void setDescripcionProfesional(String descripcionProfesional) {
        this.descripcionProfesional = descripcionProfesional;
    }
    
    
    
}
