/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.GestorServiciosModel;
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
public class GestorServiciosDAO extends CrudDAO<GestorServiciosModel> {

    @Override
    public GestorServiciosModel insert(GestorServiciosModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Gestor_Servicios(correo_gestor_servicios, contraseña) VALUES(?, ?)";
        EncriptarMD5 encrypt = new EncriptarMD5();

        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, entity.getEmail());
            statement.setString(2, encrypt.getMD5(entity.getPassword()));

            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error en: GestorServiciosDAO");
        }
        return entity;
    }

    @Override
    public List<GestorServiciosModel> findAll() throws SQLException {
        List<GestorServiciosModel> gestorServicios = new ArrayList<>();
        String sql = "SELECT * FROM Gestor_Servicios WHERE activo = TRUE";
        try (Connection conn = DBConnection.getConnection(); 
                PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                gestorServicios.add(new GestorServiciosModel(
                        rs.getString("correo_gestor_servicios"),
                        rs.getString("contraseña")
                ));
            }
        } catch(Exception e) {
            System.out.println("Error en Gestor serviciosDAO metodo findAll()");
            System.out.println(e);
        }
        return gestorServicios;
    }
}
