/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.models;

/**
 *
 * @author brandon
 */
public class ServicioModel {
    private String nombreServicio;
    private String descripcion;
    private Double precio;
    private String tiempoServicio;
    private String creadorServicio;

    public ServicioModel(String nombreServicio, String descripcion, Double precio, String tiempoServicio, String creadorServicio) {
        this.nombreServicio = nombreServicio;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tiempoServicio = tiempoServicio;
        this.creadorServicio = creadorServicio;
    }

    public ServicioModel() {
    }

    public String getNombreServicio() {
        return nombreServicio;
    }

    public void setNombreServicio(String nombreServicio) {
        this.nombreServicio = nombreServicio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getTiempoServicio() {
        return tiempoServicio;
    }

    public void setTiempoServicio(String tiempoServicio) {
        this.tiempoServicio = tiempoServicio;
    }

    public String getCreadorServicio() {
        return creadorServicio;
    }

    public void setCreadorServicio(String creadorServicio) {
        this.creadorServicio = creadorServicio;
    }  
    
}
