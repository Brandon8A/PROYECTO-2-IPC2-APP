/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.models;

/**
 *
 * @author brandon
 */
public class AnuncioModel {
    private int id;
    private String tipoAnuncio;
    private int tiempoDuracion;
    private String descripcion;
    private int vecesMostrado;
    private String activo;
    private String path;
    private Double precioAdquirido;

    public AnuncioModel(int id, String tipoAnuncio, int tiempoDuracion, String descripcion, int vecesMostrado, String activo) {
        this.id = id;
        this.tipoAnuncio = tipoAnuncio;
        this.tiempoDuracion = tiempoDuracion;
        this.descripcion = descripcion;
        this.vecesMostrado = vecesMostrado;
        this.activo = activo;
    }

    public AnuncioModel(String tipoAnuncio, int tiempoDuracion, String descripcion, int vecesMostrado, String activo, String path, Double precioAdquirido) {
        this.tipoAnuncio = tipoAnuncio;
        this.tiempoDuracion = tiempoDuracion;
        this.descripcion = descripcion;
        this.vecesMostrado = vecesMostrado;
        this.activo = activo;
        this.path = path;
        this.precioAdquirido = precioAdquirido;
    }

    public AnuncioModel(int id, String tipoAnuncio, int tiempoDuracion, String descripcion, String path, Double precioAdquirido) {
        this.id = id;
        this.tipoAnuncio = tipoAnuncio;
        this.tiempoDuracion = tiempoDuracion;
        this.descripcion = descripcion;
        this.path = path;
        this.precioAdquirido = precioAdquirido;
    }

    public AnuncioModel(String tipoAnuncio, int tiempoDuracion, String descripcion, String path, Double precioAdquirido) {
        this.tipoAnuncio = tipoAnuncio;
        this.tiempoDuracion = tiempoDuracion;
        this.descripcion = descripcion;
        this.path = path;
        this.precioAdquirido = precioAdquirido;
    }
    
    public AnuncioModel() {
    }

    public String getTipoAnuncio() {
        return tipoAnuncio;
    }

    public void setTipoAnuncio(String tipoAnuncio) {
        this.tipoAnuncio = tipoAnuncio;
    }

    public int getTiempoDuracion() {
        return tiempoDuracion;
    }

    public void setTiempoDuracion(int tiempoDuracion) {
        this.tiempoDuracion = tiempoDuracion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getVecesMostrado() {
        return vecesMostrado;
    }

    public void setVecesMostrado(int vecesMostrado) {
        this.vecesMostrado = vecesMostrado;
    }

    public String isActivo() {
        return activo;
    }

    public void setActivo(String activo) {
        this.activo = activo;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Double getPrecioAdquirido() {
        return precioAdquirido;
    }

    public void setPrecioAdquirido(Double precioAdquirido) {
        this.precioAdquirido = precioAdquirido;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    
}
