/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.AdminModel;
import com.mycompany.appsalonbelleza.models.ClienteModel;
import com.mycompany.appsalonbelleza.models.MarketingModel;
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
public class ClienteDAO extends CrudDAO<ClienteModel>{
    
    

    @Override
    public ClienteModel insert(ClienteModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Cliente(correo_cliente, contraseña) VALUES(?, ?)";
        EncriptarMD5 encrypt = new EncriptarMD5();
        try (Connection connection = DBConnection.getConnection(); 
        PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)){
            statement.setString(1, entity.getCorreo());
            statement.setString(2, entity.getDireccion());
            statement.setString(3, entity.getDpi());
            statement.setString(4, entity.getTelefono());
            
            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error en: ClienteDAO en metodo 'insert'");
        }
        return entity;
    }

    @Override
    public List<ClienteModel> findAll() throws SQLException {
        List<ClienteModel> clientes = new ArrayList<>();
        String sql = "SELECT * FROM Cliente WHERE activo = TRUE";
        try (Connection conn = DBConnection.getConnection(); 
                PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                clientes.add(new ClienteModel(
                        rs.getString("dpi"), 
                        rs.getString("dpi"),
                        Boolean.parseBoolean(rs.getString("dpi")),
                        rs.getString("dpi"),
                        rs.getString("dpi"),
                        rs.getString("dpi"),
                        rs.getString("dpi"),
                        rs.getString("dpi"),
                        rs.getString("dpi"),
                        rs.getString("dpi"))
                );
            }
        }
        return clientes;
    }
    
}
