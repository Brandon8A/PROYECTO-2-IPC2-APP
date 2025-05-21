/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.models.AnuncioModel;
import com.mycompany.appsalonbelleza.models.CitaModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author brandon
 */
public class AnuncioDAO {
    
    public List<AnuncioModel> findAll() {
        List<AnuncioModel> servicios = new ArrayList<>();
        String sql = "SELECT * FROM Anuncio";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                servicios.add(new AnuncioModel(rs.getString("tipo_anuncio_fk"), 
                        Integer.parseInt(rs.getString("tiempo_duracion")), 
                        rs.getString("descripcion"), 
                        Integer.parseInt(rs.getString("veces_mostrado")), 
                        Boolean.parseBoolean(rs.getString("activo"))));
            }
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("error: " + e);
            System.out.println("Error en obtener los anuncios metodo findAll(), Clase: AnuncioDAO");
        }
        return servicios;
    }
    
    public AnuncioModel insert(AnuncioModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Anuncio(tiempo_duracion, path, descripcion, tipo_anuncio_fk, precio_adquirido) VALUES(?, ?, ?, ?, ? )";

        try (Connection connection = DBConnection.getConnection(); 
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setInt(1, entity.getTiempoDuracion());
            statement.setString(2, entity.getPath());
            statement.setString(3, entity.getDescripcion());
            statement.setString(4, entity.getTipoAnuncio());
            statement.setDouble(5, entity.getPrecioAdquirido());
            
            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error en: CitaDAO en insert");
        }
        return entity;
    }
}
