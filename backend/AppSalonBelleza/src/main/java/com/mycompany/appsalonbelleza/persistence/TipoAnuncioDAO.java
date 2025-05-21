/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.models.TipoAnuncioModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author brandon
 */
public class TipoAnuncioDAO {
    public List<TipoAnuncioModel> findAll() {
        List<TipoAnuncioModel> tipoAnuncios = new ArrayList<>();
        String sql = "SELECT * FROM Tipo_Anuncio";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); 
                ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                tipoAnuncios.add(new TipoAnuncioModel(rs.getString("tipo_anuncio"), 
                        rs.getDouble("precio")));
            }
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("error: " + e);
            System.out.println("Error en obtener los anuncios metodo findAll(), Clase: TipoAnuncioDAO");
        }
        return tipoAnuncios;
    }
}
