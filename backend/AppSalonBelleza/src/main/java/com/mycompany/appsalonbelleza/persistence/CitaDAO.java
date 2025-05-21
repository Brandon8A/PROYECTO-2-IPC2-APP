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

    public CitaModel insert(CitaModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Horario(hora_inicio, correo_empleado_fk) VALUES(?, ?)";

        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, entity.getHora());
            statement.setString(2, entity.getEmpleado());
            statement.executeUpdate();
        } catch (Exception e) {
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
                citas.add(new CitaModel());
            }
        }
        return citas;
    }
}
