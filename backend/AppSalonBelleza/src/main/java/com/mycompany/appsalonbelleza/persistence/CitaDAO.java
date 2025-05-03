/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.CitaModel;
import com.mycompany.appsalonbelleza.models.EmpleadoModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author brandon
 */
public class CitaDAO {
    public CitaModel insert(CitaModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Horario(hora_inicio, correo_empleado_fk) VALUES(?, ?)";
        
        try (Connection connection = DBConnection.getConnection(); 
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)){
            statement.setString(1, entity.getHora());
            statement.setString(2, entity.getEmpleado());
            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error en: CitaDAO en insert");
        }
        return entity;
    }
}
