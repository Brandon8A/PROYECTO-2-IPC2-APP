/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.AdminModel;
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
public class AdminDAO extends CrudDAO<AdminModel>{

    @Override
    public AdminModel insert(AdminModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Administrador(correo_administrador, contraseña) VALUES(?, ?)";
        EncriptarMD5 encrypt = new EncriptarMD5();
        
        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)){
            statement.setString(1, entity.getEmail());
            statement.setString(2, encrypt.getMD5(entity.getPassword()));
            
            statement.executeUpdate();
            
        }  catch (Exception e) {
            System.out.println("ERROR en: AdminDAO");
        }
        return entity;
    }

    @Override
    public List<AdminModel> findAll() throws SQLException {
        List<AdminModel> admins = new ArrayList<>();
        String sql = "SELECT * FROM Administrador WHERE activo = TRUE";
        try (Connection conn = DBConnection.getConnection();
                PreparedStatement stmt = conn.prepareStatement(sql); 
                ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                admins.add(new AdminModel(
                        rs.getString("correo_administrador"),
                        rs.getString("contraseña")
                ));
            }
        }
        return admins;
    }
    
    
    
}
