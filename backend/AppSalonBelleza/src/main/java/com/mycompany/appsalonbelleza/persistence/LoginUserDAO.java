/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.controllers.LoginServlet;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.ClienteModel;
import com.mycompany.appsalonbelleza.models.UserLoginModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author brandon
 */
public class LoginUserDAO {

    public PreparedStatement statement;
    private LoginServlet loginServlet;

    public LoginUserDAO(LoginServlet loginServlet) {
        this.loginServlet = loginServlet;
    }
    

    private final String SQL_ADMIN = "SELECT * FROM Administrador WHERE correo_administrador = ? AND contraseña = ?";
    private final String SQL_CLIENTE = "SELECT * FROM Cliente WHERE correo_cliente = ? AND contraseña = ?";
    private final String SQL_EMPLEADO = "SELECT * FROM Empleado WHERE correo_empleado = ? AND contraseña = ?";
    private final String SQL_GESTOR_SERVICIOS = "SELECT * FROM Gestor_Servicios WHERE correo_gestor_servicios = ? AND contraseña = ?";
    private final String SQL_MARKETING = "SELECT * FROM Marketing WHERE correo_marketing = ? AND contraseña = ?";
    public EncriptarMD5 encrypt = new EncriptarMD5();

    public boolean corroborarCredenciales(UserLoginModel entity) {
        try {
            Connection connection = DBConnection.getConnection();
            if (verificarUser(connection, SQL_ADMIN, entity)) {
                loginServlet.setRolUserLogin("Administrador");
                return true;
            }
        } catch (Exception e) {
            System.out.println("Error en: ClienteDAO en metodo 'corroborarCredenciales'");
        }
        return false;
    }

    private boolean verificarUser(Connection connection, String sql, UserLoginModel entity) {
        try {
            this.statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setString(1, entity.getEmail());
            statement.setString(2, encrypt.getMD5(entity.getPassword()));
            System.out.println();
            
            ResultSet resultSet = statement.executeQuery();
            return resultSet.next();
        } catch (Exception e) {
            System.out.println("Error en metodo verificarUser");
            System.out.println(e.getStackTrace());
        }
        return false;
    }

}
