/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.EmpleadoModel;
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
public class EmpleadoDAO extends CrudDAO<EmpleadoModel>{

    @Override
    public EmpleadoModel insert(EmpleadoModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Empleado(correo_empleado, contraseña) VALUES(?, ?)";
        EncriptarMD5 encrypt = new EncriptarMD5();
        
        try (Connection connection = DBConnection.getConnection(); 
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)){
            statement.setString(1, entity.getEmail());
            statement.setString(2, encrypt.getMD5(entity.getPassword()));
            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error en: EmpleadoDAO");
        }
        return entity;
    }

    @Override
    public List<EmpleadoModel> findAll() throws SQLException {
        List<EmpleadoModel> empleados = new ArrayList<>();
        String sql = "SELECT * FROM Empleado WHERE activo = TRUE";
        
        try (Connection conn = DBConnection.getConnection(); 
                PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()){
            while (rs.next()) {
                empleados.add(new EmpleadoModel(
                        rs.getString("correo_empleado"),
                        rs.getString("contraseña")
                ));
            }
        } catch (Exception e) {
            System.out.println("Error en EmpleadoDAO");
            System.out.println(e);
        }
        return empleados;
    }
    
}
