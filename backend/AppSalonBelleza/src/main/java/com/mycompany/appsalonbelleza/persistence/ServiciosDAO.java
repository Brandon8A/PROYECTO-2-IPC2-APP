/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.models.ServicioModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author brandon
 */
public class ServiciosDAO {
    
    public List<ServicioModel> findAll(){
        List<ServicioModel> servicios = new ArrayList<>();
        String sql = "SELECT * FROM Servicio WHERE oculto = FALSE";
        try (Connection conn = DBConnection.getConnection(); 
                PreparedStatement stmt = conn.prepareStatement(sql);
                ResultSet rs = stmt.executeQuery()){
            while (rs.next()) {                
                servicios.add(new ServicioModel(
                        rs.getString("nombre_servicio"), 
                        rs.getString("descripcion"), 
                        Double.parseDouble(rs.getString("precio")), 
                        rs.getString("tiempo_servicio"), 
                        rs.getString("catalago")));
            }
        } catch (Exception e) {
            System.out.println("Error en obtener los servicios meotodo findAll(), Clase ServiciosDAO");
        }
        return servicios;
    }
}
