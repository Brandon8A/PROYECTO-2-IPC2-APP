/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.models.HorarioSalonModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;

/**
 *
 * @author brandon
 */
public class HorarioSalonDAO {

    public void actualizarHorario(HorarioSalonModel horarioSalonModel) throws SQLException {
        String sqlInsert = "UPDATE Salon SET horario_atencion_inicio = ?, horario_atencion_fin = ?";
        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setString(1, horarioSalonModel.getHoraEntrada());
            statement.setString(2, horarioSalonModel.getHoraSalida());

            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println("Error en HorarioSalonDAO en metodo: actualizarHorario()");
        }
    }

}
