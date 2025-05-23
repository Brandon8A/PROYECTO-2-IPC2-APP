/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.models;

/**
 *
 * @author brandon
 */
public class AnunciosDTO {
    private int id;
    private String tipoAnuncio;
    private String descripcion;
    private int tiempoDuracion;
    private int vecesMostrado;

    public AnunciosDTO(int id, String tipoAnuncio, String descripcion, int tiempoDuracion, int vecesMostrado) {
        this.id = id;
        this.tipoAnuncio = tipoAnuncio;
        this.descripcion = descripcion;
        this.tiempoDuracion = tiempoDuracion;
        this.vecesMostrado = vecesMostrado;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTipoAnuncio() {
        return tipoAnuncio;
    }

    public void setTipoAnuncio(String tipoAnuncio) {
        this.tipoAnuncio = tipoAnuncio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getTiempoDuracion() {
        return tiempoDuracion;
    }

    public void setTiempoDuracion(int tiempoDuracion) {
        this.tiempoDuracion = tiempoDuracion;
    }

    public int getVecesMostrado() {
        return vecesMostrado;
    }

    public void setVecesMostrado(int vecesMostrado) {
        this.vecesMostrado = vecesMostrado;
    }
    
    
}
