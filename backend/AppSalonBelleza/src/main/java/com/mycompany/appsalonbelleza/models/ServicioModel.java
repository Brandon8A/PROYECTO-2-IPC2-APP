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
    private String oculto;
    private String path;
    private String vecesUtilizado;

    public ServicioModel(String nombreServicio, String descripcion, Double precio, String tiempoServicio, String creadorServicio, String oculto) {
        this.nombreServicio = nombreServicio;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tiempoServicio = tiempoServicio;
        this.creadorServicio = creadorServicio;
        this.oculto = oculto;
    }

    public ServicioModel(String nombreServicio, String descripcion, Double precio, String tiempoServicio) {
        this.nombreServicio = nombreServicio;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tiempoServicio = tiempoServicio;
    }

    public ServicioModel(String nombreServicio, String descripcion, Double precio, String tiempoServicio, String vecesUtilizado) {
        this.nombreServicio = nombreServicio;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tiempoServicio = tiempoServicio;
        this.vecesUtilizado = vecesUtilizado;
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

    public String getOculto() {
        return oculto;
    }

    public void setOculto(String oculto) {
        this.oculto = oculto;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getVecesUtilizado() {
        return vecesUtilizado;
    }

    public void setVecesUtilizado(String vecesUtilizado) {
        this.vecesUtilizado = vecesUtilizado;
    }
    
    
    
}
