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
    private String tipoAnuncio;
    private int tiempoDuracion;
    private String descripcion;
    private int vecesMostrado;
    private boolean activo;
    private String path;
    private Double precioAdquirido;

    public AnuncioModel(String tipoAnuncio, int tiempoDuracion, String descripcion, int vecesMostrado, boolean activo) {
        this.tipoAnuncio = tipoAnuncio;
        this.tiempoDuracion = tiempoDuracion;
        this.descripcion = descripcion;
        this.vecesMostrado = vecesMostrado;
        this.activo = activo;
    }

    public AnuncioModel(String tipoAnuncio, int tiempoDuracion, String descripcion, int vecesMostrado, boolean activo, String path, Double precioAdquirido) {
        this.tipoAnuncio = tipoAnuncio;
        this.tiempoDuracion = tiempoDuracion;
        this.descripcion = descripcion;
        this.vecesMostrado = vecesMostrado;
        this.activo = activo;
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

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
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
    
    
}
