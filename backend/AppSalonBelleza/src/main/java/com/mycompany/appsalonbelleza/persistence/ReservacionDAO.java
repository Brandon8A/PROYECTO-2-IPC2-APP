/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.models.ReservacionModel;
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
public class ReservacionDAO {

    public List<ReservacionModel> findAll(String correoCliente) throws SQLException {
        List<ReservacionModel> reservaciones = new ArrayList<>();
        String sql = "SELECT r.id_reservacion, c.fecha_cita, c.hora, c.correo_empleado_fk "
                + "FROM Reservacion r "
                + "JOIN Cita c ON r.id_cita_fk = c.id_cita "
                + "WHERE r.correo_cliente_fk = '" + correoCliente + "'";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                reservaciones.add(new ReservacionModel(
                        rs.getString("nombre_servico_fk"),
                        rs.getString("nombre_servico_fk"),
                        rs.getString("nombre_servico_fk"),
                        rs.getString("nombre_servico_fk")));
            }
        }
        return reservaciones;
    }

    public void insertReservacion(String cliente, int idCita) throws SQLException {
        String sqlInsertReservacion = "INSERT INTO Reservacion(correo_cliente_fk, id_cita_fk) VALUES(?, ?)";

        try (Connection connection = DBConnection.getConnection(); PreparedStatement statementCita = connection.prepareStatement(sqlInsertReservacion, Statement.RETURN_GENERATED_KEYS)) {

            statementCita.setString(1, cliente);
            statementCita.setInt(2, idCita);
            System.out.println("Insertando reservación con cliente: " + cliente + ", idCita: " + idCita);

            statementCita.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error: " + e);
            System.out.println("Error en: ReservacionDAO en insertReservacion");
        }
    }

}
