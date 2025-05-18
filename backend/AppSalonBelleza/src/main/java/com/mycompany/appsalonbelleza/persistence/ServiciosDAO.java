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
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author brandon
 */
public class ServiciosDAO {

    public List<ServicioModel> findAll() {
        List<ServicioModel> servicios = new ArrayList<>();
        String sql = "SELECT * FROM Servicio";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                servicios.add(new ServicioModel(
                        rs.getString("nombre_servicio"),
                        rs.getString("descripcion"),
                        Double.parseDouble(rs.getString("precio")),
                        rs.getString("tiempo_servicio"),
                        rs.getString("correo_gestor_servicios_fk"),
                        rs.getString("oculto")));
            }
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("error: " + e);
            System.out.println("Error en obtener los servicios meotodo findAll(), Clase: ServiciosDAO");
        }
        return servicios;
    }

    public ServicioModel insert(ServicioModel servicio) throws SQLException {
        String sqlInsert = "INSERT INTO Servicio(nombre_servicio, descripcion, precio, tiempo_servicio, correo_gestor_servicios_fk)"
                + " VALUES(?, ?, ?, ?, ?)";
//        System.out.println();
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, servicio.getNombreServicio());
            statement.setString(2, servicio.getDescripcion());
            statement.setString(3, Double.toString(servicio.getPrecio()));
            statement.setString(4, servicio.getTiempoServicio());
            statement.setString(5, servicio.getCreadorServicio());

            statement.executeUpdate();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("Error en ServiciosDAO metodo insert(). error: " + e);
        }
        return servicio;
    }
    
    public ServicioModel actualizarDatosServicio(ServicioModel datosServicio, String nombreServicio) throws SQLException{
        String sqlInsert = "UPDATE Servicio SET descripcion = ?, precio = ?, tiempo_servicio = ? WHERE nombre_servicio = '"
                + nombreServicio + "'";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)){
            statement.setString(1, datosServicio.getDescripcion());
            statement.setString(2, Double.toString(datosServicio.getPrecio()));
            statement.setString(3, datosServicio.getTiempoServicio());
            
            statement.executeUpdate();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("error: " + e);
            System.out.println("Error en ServiciosDAO en metodo actualizarDatosServicio()");
        }
        return datosServicio;
    }
    
    public void ocultarServicio(String nombreServicio)throws SQLException{
        String sqlInsert = "UPDATE Servicio SET oculto = TRUE WHERE nombre_servicio = '"+ nombreServicio + "'";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)){
            
            statement.executeUpdate();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("Error en ServiciosDAO en metodo ocultarServicio()");
        }
    }
    
    public void mostrarServicio(String nombreServicio)throws SQLException{
        String sqlInsert = "UPDATE Servicio SET oculto = FALSE WHERE nombre_servicio = '"+ nombreServicio + "'";
        try (Connection connection = DBConnection.getConnection();
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)){
            
            statement.executeUpdate();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("Error en ServiciosDAO en metodo mostrarServicio()");
        }
    }
}
