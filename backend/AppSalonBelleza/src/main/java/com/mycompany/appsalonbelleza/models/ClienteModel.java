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
    private String correo;
    private String contraseña;
    private boolean listaNegra;
    private String dpi;
    private String telefono;
    private String direccion;
    private String pathFoto;
    private String hobbies;
    private String descripcion;
    private String gustos;

    public ClienteModel(String correo, String contraseña, boolean listaNegra, String dpi, String telefono, String direccion, String pathFoto, String hobbies, String descripcion, String gustos) {
        this.correo = correo;
        this.contraseña = contraseña;
        this.listaNegra = listaNegra;
        this.dpi = dpi;
        this.telefono = telefono;
        this.direccion = direccion;
        this.pathFoto = pathFoto;
        this.hobbies = hobbies;
        this.descripcion = descripcion;
        this.gustos = gustos;
    }

    public ClienteModel() {
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getContraseña() {
        return contraseña;
    }

    public void setContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    public boolean isListaNegra() {
        return listaNegra;
    }

    public void setListaNegra(boolean listaNegra) {
        this.listaNegra = listaNegra;
    }

    public String getDpi() {
        return dpi;
    }

    public void setDpi(String dpi) {
        this.dpi = dpi;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
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
        return "Cliente { Correo = " + this.correo + ", password = " + this.contraseña + "}"; 
    }
    
}
