/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.ClienteModel;
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
public class ClienteDAO extends CrudDAO<ClienteModel> {

    @Override
    public ClienteModel insert(ClienteModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Cliente(correo_cliente, contraseña) VALUES(?, ?)";
        EncriptarMD5 encrypt = new EncriptarMD5();
        try (Connection connection = DBConnection.getConnection(); 
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, entity.getEmail());
            statement.setString(2, encrypt.getMD5(entity.getPassword()));

            statement.executeUpdate();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("error en ClienteDAO metodo Insert, erro: " + e);
            System.out.println("Error en: ClienteDAO en metodo 'insert'");
        }
        return entity;
    }

    @Override
    public List<ClienteModel> findAll() throws SQLException {
        List<ClienteModel> clientes = new ArrayList<>();
        String sql = "SELECT * FROM Cliente WHERE activo = TRUE";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                clientes.add(new ClienteModel(
                        rs.getString("correo_cliente"),
                        rs.getString("contraseña"),
                        rs.getString("dpi"),
                        rs.getString("telefono"),
                        rs.getString("direccion")));
            }
        }
        return clientes;
    }

    public ClienteModel actualizarDatosCliente(ClienteModel clienteModel, String cliente)throws SQLException {
        String sqlInsert = "UPDATE Cliente SET dpi = ?, telefono = ?, direccion = ?, hobbies = ?, descripcion = ?, gustos = ?,"
                + "path_foto = ? WHERE correo_cliente = '" + cliente + "';";
        clienteModel.setEmail(cliente);
        try (Connection connection = DBConnection.getConnection(); 
                PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, clienteModel.getUserDpi());
            statement.setString(2, clienteModel.getUserPhoneNumber());
            statement.setString(3, clienteModel.getUserAddress());
            statement.setString(4, clienteModel.getHobbies());
            statement.setString(5, clienteModel.getDescripcion());
            statement.setString(6, clienteModel.getGustos());
            statement.setString(7, clienteModel.getPathFoto());

            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error en: ClienteDAO en metodo actualizarDatosCliente()");
        }
        return clienteModel;
    }

}
