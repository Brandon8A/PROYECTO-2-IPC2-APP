/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.encriptacion.EncriptarMD5;
import com.mycompany.appsalonbelleza.models.CitaModel;
import com.mycompany.appsalonbelleza.models.ClienteModel;
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
public class CitaDAO {

    ReservacionDAO reservacionDAO = new ReservacionDAO();

    public CitaModel insertarCita(CitaModel entity, String cliente) throws SQLException {
        String sqlInsertHorario = "INSERT INTO Horario(hora_inicio, correo_empleado_fk, fecha_cita) VALUES(?, ?, ?)";
        String sqlInsertCita = "INSERT INTO Cita(nombre_servicio_fk, correo_empleado_fk, fecha_cita, hora) VALUES(?, ?, ?, ?)";

        try (Connection connection = DBConnection.getConnection(); PreparedStatement statementHorario = connection.prepareStatement(sqlInsertHorario, Statement.RETURN_GENERATED_KEYS); PreparedStatement statementCita = connection.prepareStatement(sqlInsertCita, Statement.RETURN_GENERATED_KEYS)) {

            statementHorario.setString(1, entity.getHora());
            statementHorario.setString(2, entity.getEmpleado());
            statementHorario.setString(3, entity.getFecha());
            statementHorario.executeUpdate();

            statementCita.setString(1, entity.getServicio());
            statementCita.setString(2, entity.getEmpleado());
            statementCita.setString(3, entity.getFecha());
            statementCita.setString(4, entity.getHora());
            int filasInsertadas = statementCita.executeUpdate();

            if (filasInsertadas > 0) {
                ResultSet generatedKeys = statementCita.getGeneratedKeys();
                if (generatedKeys.next()) {
                    int idReservacionGenerada = generatedKeys.getInt(1); // o "id_reservacion"
                    System.out.println("ID generado: " + idReservacionGenerada);
                    reservacionDAO.insertReservacion(cliente, idReservacionGenerada);
                }
            }
        } catch (Exception e) {
            System.out.println("Error: " + e);
            System.out.println("Error en: CitaDAO en insert");
        }
        return entity;
    }

    public List<CitaModel> findAll(String empleado) throws SQLException {
        List<CitaModel> citas = new ArrayList<>();
        String sql = "SELECT C.nombre_servicio_fk, C.fecha_cita, R.correo_cliente_fk, S.tiempo_servicio FROM Cita C JOIN "
                + "Reservacion R ON C.id_cita = R.id_cita_fk JOIN Servicio S ON C.nombre_servicio_fk = S.nombre_servicio "
                + "WHERE C.correo_empleado_fk = '" + empleado + "';";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {

            while (rs.next()) {
                citas.add(new CitaModel(rs.getString("correo_cliente_fk"),
                        rs.getString("nombre_servico_fk"),
                        rs.getString("tiempo_servicio")));
            }
        }
        return citas;
    }
}
