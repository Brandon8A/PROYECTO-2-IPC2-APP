/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.models;

/**
 *
 * @author brandon
 */
public class CitaModel {
    private String hora;
    private String empleado;
    private String nombreCliente;
    private String nombreServicio;
    private String tiempo;

    public CitaModel(String hora, String empleado) {
        this.hora = hora;
        this.empleado = empleado;
    }

    public CitaModel(String nombreCliente, String nombreServicio, String tiempo) {
        this.nombreCliente = nombreCliente;
        this.nombreServicio = nombreServicio;
        this.tiempo = tiempo;
    }
    
    public CitaModel() {
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getEmpleado() {
        return empleado;
    }

    public void setEmpleado(String empleado) {
        this.empleado = empleado;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getNombreServicio() {
        return nombreServicio;
    }

    public void setNombreServicio(String nombreServicio) {
        this.nombreServicio = nombreServicio;
    }

    public String getTiempo() {
        return tiempo;
    }

    public void setTiempo(String tiempo) {
        this.tiempo = tiempo;
    }
    
    
}
