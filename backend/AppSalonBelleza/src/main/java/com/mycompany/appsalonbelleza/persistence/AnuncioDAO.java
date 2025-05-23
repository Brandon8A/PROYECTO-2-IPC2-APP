/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.appsalonbelleza.persistence;

import com.mycompany.appsalonbelleza.aplication.DBConnection;
import com.mycompany.appsalonbelleza.models.AnuncioModel;
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
public class AnuncioDAO {

    public List<AnuncioModel> findAll() {
        List<AnuncioModel> servicios = new ArrayList<>();
        String sql = "SELECT * FROM Anuncio";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                servicios.add(new AnuncioModel(rs.getInt("id_anuncio"),
                        rs.getString("tipo_anuncio_fk"),
                        Integer.parseInt(rs.getString("tiempo_duracion")),
                        rs.getString("descripcion"),
                        Integer.parseInt(rs.getString("veces_mostrado")),
                        rs.getString("activo")));
            }
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("error: " + e);
            System.out.println("Error en obtener los anuncios metodo findAll(), Clase: AnuncioDAO");
        }
        return servicios;
    }

    public AnuncioModel insert(AnuncioModel entity) throws SQLException {
        String sqlInsert = "INSERT INTO Anuncio(tiempo_duracion, path, descripcion, tipo_anuncio_fk, precio_adquirido) VALUES(?, ?, ?, ?, ? )";

        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {
            statement.setInt(1, entity.getTiempoDuracion());
            statement.setString(2, entity.getPath());
            statement.setString(3, entity.getDescripcion());
            statement.setString(4, entity.getTipoAnuncio());
            statement.setDouble(5, entity.getPrecioAdquirido());

            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println("error: " + e);
            System.out.println("Error en: AnuncioDAO en insert");
        }
        return entity;
    }

    public List<AnuncioModel> desactivarAnuncio(String idAnuncio) {
        List<AnuncioModel> servicios = new ArrayList<>();
        String sqlInsert = "UPDATE Anuncio SET activo = FALSE WHERE id_anuncio = '" + idAnuncio + "';";
        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {

            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error en: AnuncioDAO en metodo desacrivarAnuncio()");
        }
        servicios = findAll();
        return servicios;
    }

    public List<AnuncioModel> activarAnuncio(String idAnuncio) {
        List<AnuncioModel> servicios = new ArrayList<>();
        String sqlInsert = "UPDATE Anuncio SET activo = TRUE WHERE id_anuncio = '" + idAnuncio + "';";
        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert, Statement.RETURN_GENERATED_KEYS)) {

            statement.executeUpdate();
        } catch (Exception e) {
            System.out.println(e);
            System.out.println("Error en: AnuncioDAO en metodo desacrivarAnuncio()");
        }
        servicios = findAll();
        return servicios;
    }

    public List<AnuncioModel> obtenerAnunciosMasMostrados() {
        List<AnuncioModel> serviciosMasReservados = new ArrayList<>();
        String sqlInsert = "SELECT * FROM Anuncio ORDER BY veces_mostrado DESC LIMIT 5;";
        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert); ResultSet resultSet = statement.executeQuery();) {
            while (resultSet.next()) {
                serviciosMasReservados.add(new AnuncioModel(resultSet.getInt("id_anuncio"),
                        resultSet.getString("tipo_anuncio_fk"),
                        resultSet.getInt("tiempo_duracion"),
                        resultSet.getString("descripcion"),
                        resultSet.getInt("veces_mostrado"),
                        resultSet.getString("activo")));
            }

//            statement.executeQuery();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("Error: " + e);
            System.out.println("Error en ServiciosDAO en metodo obtenerAnunciosMasMostrados()");
        }
        return serviciosMasReservados;
    }

    public List<AnuncioModel> obtenerAnunciosMenosMostrados() {
        List<AnuncioModel> serviciosMasReservados = new ArrayList<>();
        String sqlInsert = "SELECT * FROM Anuncio ORDER BY veces_mostrado ASC LIMIT 5;";
        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert); ResultSet resultSet = statement.executeQuery();) {
            while (resultSet.next()) {
                serviciosMasReservados.add(new AnuncioModel(resultSet.getInt("id_anuncio"),
                        resultSet.getString("tipo_anuncio_fk"),
                        resultSet.getInt("tiempo_duracion"),
                        resultSet.getString("descripcion"),
                        resultSet.getInt("veces_mostrado"),
                        resultSet.getString("activo")));
            }

//            statement.executeQuery();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("Error: " + e);
            System.out.println("Error en ServiciosDAO en metodo obtenerAnunciosMenosMostrados()");
        }
        return serviciosMasReservados;
    }

    public List<AnuncioModel> obtenerAnunciosMasComprados() {
        List<AnuncioModel> serviciosMasReservados = new ArrayList<>();
        String sqlInsert = "SELECT * FROM Anuncio;";
        try (Connection connection = DBConnection.getConnection(); PreparedStatement statement = connection.prepareStatement(sqlInsert); ResultSet resultSet = statement.executeQuery();) {
            while (resultSet.next()) {
                serviciosMasReservados.add(new AnuncioModel(resultSet.getInt("id_anuncio"),
                        resultSet.getString("tipo_anuncio_fk"),
                        resultSet.getInt("tiempo_duracion"),
                        resultSet.getString("descripcion"),
                        resultSet.getInt("veces_mostrado"),
                        resultSet.getString("activo")));
            }

//            statement.executeQuery();
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("Error: " + e);
            System.out.println("Error en ServiciosDAO en metodo obtenerAnunciosMasComprados()");
        }
        return serviciosMasReservados;
    }

    public List<AnuncioModel> obtenerAnunciosAcitvos() throws SQLException {
        List<AnuncioModel> servicios = new ArrayList<>();
        String sql = "SELECT * FROM Anuncio WHERE activo = TRUE";
        try (Connection conn = DBConnection.getConnection(); PreparedStatement stmt = conn.prepareStatement(sql); ResultSet rs = stmt.executeQuery()) {
            while (rs.next()) {
                servicios.add(new AnuncioModel(rs.getInt("id_anuncio"),
                        rs.getString("tipo_anuncio_fk"),
                        Integer.parseInt(rs.getString("tiempo_duracion")),
                        rs.getString("descripcion"),
                        Integer.parseInt(rs.getString("veces_mostrado")),
                        rs.getString("activo")));
            }
        } catch (Exception e) {
            e.getStackTrace();
            System.out.println("error: " + e);
            System.out.println("Error en obtener los anuncios metodo obtenerAnunciosActivos(), Clase: AnuncioDAO");
        }
        return servicios;
    }

    public AnuncioModel anunicoAMostrar(List<AnuncioModel> anuncios, List<String> gustos) {
        for (AnuncioModel anuncio : anuncios) {
            for (String gusto : gustos) {
                if (anuncio.getDescripcion().toLowerCase().contains(gusto.trim().toLowerCase())) {
                    return anuncio;
                }
            }
        }
        return null;
    }
}
